import { Stack } from '@mui/material'
import React from 'react'
import { categories } from '../utils/constants'

const SideBar = ({ selectedCategory,setselectedCategory }) => {
  return (
    <React.Fragment>
        <Stack direction='row' sx={{ overflowY: 'auto', height: { sx: 'auto', md: '95%' }, flexDirection: { md: 'column' } }}>
            {categories.map((category) => {
                return (
                <button onClick={ () => setselectedCategory(category.name)} className="category-btn" style={{ background: category.name === selectedCategory && '#FC1505', color: '#fff' }}>
                    <span style={{ color: category.name === selectedCategory ? 'white' : 'red', marginRight: '15px' }}>{category.icon}</span>
                    <span style={{ opacity: category.name === selectedCategory ? '1' : '0.8' }}>{category.name}</span>
                </button>
                )
            })}

        </Stack>
    </React.Fragment>
  )
}

export default SideBar