import { InfoFieldStyle } from '../Styles/InfoFieldStyle'
import React from 'react'

export default function InfoField(props) {
    return (
        <InfoFieldStyle>{props.val}</InfoFieldStyle>
    )
}