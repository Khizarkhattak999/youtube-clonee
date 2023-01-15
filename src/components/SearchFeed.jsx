import { Box, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchfromAPI } from '../utils/fetchfromAPI'
import Videos from './Videos'

const SearchFeed = () => {

  const [videos, setvideos] = useState([])

  const {searchTerm} = useParams()

  useEffect(() => {
    fetchfromAPI(`search?part=snippet&q=${searchTerm}`)
    .then((data) => setvideos(data.items))
  }, [searchTerm])
 

  return (
    <React.Fragment>
      <Box p={2} sx={{ overflowY: 'auto', flex: 2, height: '90vh' }}>
          <Typography variant='h4' fontWeight='bold' mb={2} sx={{ color: 'white' }}>
            Search Results for: <span style={{ color: '#F31503' }}> {searchTerm}</span> videos
          </Typography>

          <Videos videos={videos} />
        </Box>

    </React.Fragment>
  )
}

export default SearchFeed