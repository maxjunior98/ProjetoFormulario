import { createGlobalStyle } from  'styled-components'
export default createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        outline: 0;
        font-family: 'Times New Roman', Times, serif; 
    }

    body {
        padding-top:8px;
        padding-bottom: 16px;
        display: flex;
        height: 100vh;
        background: #000;
        align-items: center;
        justify-content: center;
    }
`