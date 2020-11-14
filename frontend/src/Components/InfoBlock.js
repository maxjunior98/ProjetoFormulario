import React from 'react'
import { InfoBlockStyle } from '../Styles/InfoBlockStyle'
import InfoField from './InfoField'

export default function InfoBlock(props) {
    return(
        <InfoBlockStyle>
            <div>{props.title}</div>
            <InfoField />
        </InfoBlockStyle>
    )
}