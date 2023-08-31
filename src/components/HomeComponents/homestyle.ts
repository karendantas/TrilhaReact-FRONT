import styled from "styled-components"


export const Backgrounddiv = styled.div`
    width:100%;
    background-position:left;
    background-size:cover;
    height:600px;
    display:flex;
    margin-bottom: 40px;
    
  
`

export const homeContainer = styled.div`

    margin-left:15%;
    margin-top:10%;


`;

export const infoContainer = styled.div `

    display:flex;
    width:1100px;
    max-width:100%;
    justify-content:center;
    margin:0 auto;
    height:600px;
    align-items:center;
   

`;

export const infoGroup = styled.div `
    display:flex;
    flex-wrap:wrap;
    flex-direction:column;
    padding:10%;
    align-items:center;
    

`;

export const button = styled.button`

    width:160px;
    height:50px;
    font-size:20px;
    border-top-left-radius:0px;
    filter: drop-shadow(-5px 7px 0px #ffffff);
    &:hover {
        filter: none;
        background-color:#213C5A;
        transition: 0.2s;
      }

`;

export const p = styled.p`
width:400px;
color:white;
max-width:100%;
font-size:25px;
margin-top:30px;
margin-bottom:30px;

`;