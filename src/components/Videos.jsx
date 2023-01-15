import { Box, Stack } from '@mui/material'
import React from 'react'
import ChannelCard from './ChannelCard'
import VideoCard from './VideoCard'

const Videos = ({videos, direction}) => {
  console.log(videos)
  return (
    <React.Fragment>
      <Stack direction={direction || "row"} flexWrap="wrap" justifyContent='start' gap={2}>
        {videos.map((item, idx) => (
          <Box key={idx}>
            {item.id.videoId && <VideoCard video={item}  />}
            {item.id.channelId && <ChannelCard channelDetail={item}  />}
          </Box>
        ))}
      </Stack>
    </React.Fragment>
  )
}

export default Videos