import { createGlobalStyle } from "styled-components"


const globalStyle = createGlobalStyle`

    *{
        padding:0;
        margin:0;
        font-family:Geologica
    }

    html, body, #root{
        height:100%;
    }
    button {
        border:none;
        border-radius:30px;
        outline:none;
        font-size:20px;
        font-family:Inter;
        height:40px;
        width:45%;
        box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
        background-color:#213C5A;
        color:white;
        &:hover {
            background-color: #44658b;
            transition: 0.2s;
          }
    }

    input, select {
        border:none;
        border-radius: 5px;
        outline:none;
        height:30px;
        width: 100%;
        padding:5px;
        box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
       
    }

    placeholder{
        color:#333;
    }

    h1{
        color:#213C5A;
        font-size:70px;
        font-family:Inter;
        filter: drop-shadow(-5px 7px 0px #ffffff);
    }

    h2{
        color:#213C5A;
        display:flex;
        justify-content:center;
        font-size:60px;
        font-family:inter;
    }

    h3 {
        color:#213C5A;
        font-family:Inter;
        font-size: 30px;
    }

    p{
        font-size: 20px;
        text-align:center;
        font-family:Geologica;
    }

  span{
    color:red;
    position:absolute;
    margin-top:50px;
    font-size:15px;
  }

  svg{
    font-size:30px;
    color:#213C5A;
  }
   
`
export default globalStyle