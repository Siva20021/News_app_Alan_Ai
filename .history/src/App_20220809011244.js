import React, { useState } from 'react'
import {styled} from "@mui/material/styles";
const LogoContainer=styled.div`
  padding: "0 5%",
  display: "flex,
  justifyContent:'space-around',
  alignItems:'center',

`
const App = () => {
  const [activeArticle,setActiveArticle]=useState(0);
  const [newsArticle,setNewsArticle]=useState(0);
  return (
    <div>
      <LogoContainer>

      </LogoContainer>
    </div>
  )
}

export default App
