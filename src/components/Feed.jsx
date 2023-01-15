import { Box, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { fetchfromAPI } from '../utils/fetchfromAPI'
import SideBar from './SideBar'
import Videos from './Videos'

const Feed = () => {

  const [selectedCategory, setselectedCategory] = useState('New')
  const [videos, setvideos] = useState([])

  useEffect(() => {
    fetchfromAPI(`search?part=snippet&q=${selectedCategory}`)
    .then((data) => setvideos(data.items))
  }, [selectedCategory])
 

  return (
    <React.Fragment>
      <Stack sx={{ flexDirection: { sx: 'column', md: 'row' } }}>
        <Box sx={{height: {sx: 'auto' , md: '92vh'}, borderRight: '1px solid #3d3d3d', px: {sx: 0, md: 2}}}>
          <SideBar selectedCategory={selectedCategory} setselectedCategory={setselectedCategory}/>

          <Typography className='copyright' variant="body2" sx={{ mt: 1.5, color: '#fff' }}>
            Copyright 2022 Youtube Clone.
          </Typography>

        </Box>

        <Box p={2} sx={{ overflowY: 'auto', flex: 2, height: '90vh' }}>
          <Typography variant='h4' fontWeight='bold' mb={2} sx={{ color: 'white' }}>
            {selectedCategory} <span style={{ color: '#F31503' }}>videos</span>
          </Typography>

          <Videos videos={videos} />
        </Box>

      </Stack>
    </React.Fragment>
  )
}

export default Feed