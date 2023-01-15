import { CheckCircle } from '@mui/icons-material'
import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { demoChannelTitle, demoChannelUrl, demoVideoTitle, demoVideoUrl } from '../utils/constants'

const VideoCard = ({ video : { id : {videoId }, snippet } } ) => {


  return (
    <Card sx={{ width: {sx: '100%', sm: '358px', md: '320px' }, borderRadius: 0, boxShadow: 0 }}>
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <CardMedia
         image={snippet?.thumbnails?.high?.url} 
         alt={snippet?.title}
         sx={{ width: {
          xs: '100%', sm: '358px', md: '320px'
         } , height: 180  }}
         />
      </Link>
      <CardContent sx={{ background: '#1e1e1e', height: '106px' }}>
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <Typography variant="subtitle1" color='#fff' fontWeight='bold'>
          {snippet?.title.slice(0,60) || demoVideoTitle.slice(0,60)}
        </Typography>
      </Link>
      <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}>
        <Typography variant="subtitle2" color='gray' fontWeight='bold'>
          {snippet?.channelTitle || demoChannelTitle}
          <CheckCircle sx={{ fontSize: 12, ml: '5px', color: 'gray' }} />
        </Typography>
      </Link>
      </CardContent>
        
      
    </Card>
  )
}

export default VideoCard