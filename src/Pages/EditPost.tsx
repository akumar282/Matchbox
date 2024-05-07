import React, {useContext, useEffect, useState} from 'react'
import Create from '../components/Create'
import {AuthContext} from '../components/AuthWrapper'
import {useParams} from 'react-router-dom'
import {getPost} from '../backend/queries/postQueries'
import {PostsModel} from '../API'
import {getImageBlob} from '../functions/helpers'
import {getImage} from '../backend/storage/s3'

export default function EditPost() {
  const [editable, setEditable] = useState<boolean>(false)
  const [postData, setPostData] = useState<PostsModel>()
  const [postImage, setPostImage] = useState<File | null>(null)
  const userInfo = useContext(AuthContext)
  const { id } = useParams()

  useEffect(() => {
    const getPageData = async () => {
      if(userInfo && userInfo.id && id) {
        const { data } = await getPost({id: id})
        if (data && data.getPostsModel) {
          setEditable(data.getPostsModel.userID === userInfo.id)
          setPostData(data.getPostsModel as PostsModel)
          setPostImage(await getImageBlob((await getImage(data.getPostsModel.image_link as string | undefined))) )
        }
      }
    }

    getPageData().catch()
  }, [])

  return(
    <Create edit={editable} data={postData} image={postImage}/>
  )
}