import React from 'react'
import { TextFieldStyle } from '../Styles/TextFieldStyle'

export default function TextField(props) {
    return (
        <TextFieldStyle placeholder={props.label}></TextFieldStyle>
    )
}