import React from 'react'
import {Grid,Grow,Typography} from "@mui/material";
import NewsCard from '../NewsCard/NewsCard';
import useStyles from './styles';
const infoCards=[
    {color: "#00838f", title: "Latest News", text: "Give me the latest news"},{color: "#1565c0",
    title: "News by Categories",
    info: "Business, Entertainment, General, Health, Science, Sports, Technology",
    text: "Give me the latest Technology news",}
]
const NewsCards = ({ articles, activeArticle }) => {
  if(articles.length){

  }
  return <Grow in>
    <Grid
    container
    alignItems="stretch" spacing={3}
    >
        {articles.map((article,i)=>(
            <Grid item key={i} sm={6} md={4} style={{display:'flex'}}>NewsCard</Grid>
        ))}
    </Grid>
  </Grow>;
}

export default NewsCards