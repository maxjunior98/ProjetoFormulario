import React from 'react'
import { render } from 'react-dom'
import GlobalStyle from './Styles/Global'
import App from './App'

render(
    <>
        <GlobalStyle />
        <App />
    </>
    , document.getElementById('app'));