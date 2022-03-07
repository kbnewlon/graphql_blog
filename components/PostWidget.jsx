import React, { useState, useEffect } from 'react'
import moment from  'moment'
import Link from 'next/link'

import { getRecentPost } from '../services'

const PostWidget = ({ categories, slug }) => {
  const [relatedPosts, setRelatedPosts] = useState([])


  useEffect(() => {
    if(slug){
      getSimilarPosts(category, slug)
      .then((result) => setRelatedPosts(result))
    } else{
      getRecentPost()
      .then((result) => getRecentPost(result))
    }
  }, [])
  
  return (
    <div>PostWidget</div>
  )
}

export default PostWidget