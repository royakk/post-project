import { PostType } from '../types'
import { CardComponent } from './card'
import { Stack, Typography } from '@mui/material'
interface PostItemProps{
    post?: PostType
}
export const PostItem = ({post}:PostItemProps) => {
  
  return (
    <>
        <CardComponent>
          <Stack spacing={2} alignItems='flex-start'>
            <Typography>UserId :{post?.userId}</Typography>
            <Typography variant='h5'>{post?.title}</Typography>
            <Typography> {post?.body}</Typography>
            </Stack> 
        </CardComponent>
    </>
  )
}
