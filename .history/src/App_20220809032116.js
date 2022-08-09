import React, { useEffect, useState } from 'react'
import {styled} from "@mui/material/styles";
import alanBtn from '@alan-ai/alan-sdk-web';
const LogoContainer = styled("div")(({ theme }) => ({
  padding: "0 5%",
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  width: "100%",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column-reverse",
    textAlign: "center",
  },
}));

const InfoContainer = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-around",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
  },
}));

const Card = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "50%",
  padding: "3%",
  borderRadius: 10,
  color: "white",
  backgroundColor: "rgba(21, 101, 192)",
  margin: "0 12px",
  textAlign: "center",
  height: "25vmin",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column-reverse",
    textAlign: "center",
    width: "100%",
    height: "initial",
    "&:nth-of-type(1)": {
      marginBottom: "12px",
    },
  },
}));

const LogoImg = styled("img")(({ theme }) => ({
  height: "27vmin",
  borderRadius:"20%",
  padding: "0 5%",
  margin: "3% 0",
  [theme.breakpoints.down("sm")]: {
    height: "35vmin",
  },
}));

const Footer = styled("div")(({ theme }) => ({
  textAlign: "center",
  position: "fixed",
  left: 0,
  bottom: 0,
  color: "black",
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "120px",
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}));

const Link = styled("a")(({ theme }) => ({
  textDecoration: "none",
  color: "rgba(21, 101, 192)",
}));
const App = () => {
  const [activeArticle,setActiveArticle]=useState(0);
  const [newsArticle,setNewsArticle]=useState(0);
  useEffect(()=>{
    alanBtn({
      key:"7c9654409c0992e109661132252f90282e956eca572e1d8b807a3e2338fdd0dc/stage",
      onCommand({command,articles,number})=>{
          if (command==='newHeadlines'){
              setNewsArticle(articles);
              setActiveArticle(-1)
          }
          else if(command==='highlight'){
            set
          }
      }
    })
  })
  return (
    <div>
      <LogoContainer>
          {newsArticle.length && <div>Hello world</div>}
          <LogoImg
          src="https://miro.medium.com/max/600/1*CJyCnZVdr-EfgC27MAdFUQ.jpeg"
          alt="logo"
        /> 
      </LogoContainer>
    </div>
  )
}

export default App
