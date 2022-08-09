import React, { useEffect, useState } from 'react'
import { createRef } from 'react'
import {Card,CardActions,CardActionArea,CardContent,CardMedia,Button,Typography} from "@mui/material"
const NewsCard = ({article:{description,publishedAt,source,title,url,urlToImage},activeArticle,i}) => {
   const [elRefs,setElRefs]=useState([]);
   const scrollToRef=(ref)=>window.scroll(0,ref.current.)
  return <div>NewsCard</div>;
  
}

export default NewsCard