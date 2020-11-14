import React from 'react'
import { InfoSectionStyle } from '../Styles/InfoSectionStyle'
import InfoBlock from './InfoBlock'

export default function InfoSection() {
    return(
        <InfoSectionStyle>
            <InfoBlock title='Rua'/>
            <InfoBlock title='Bairro'/>
            <InfoBlock title='Cidade'/>
            <InfoBlock title='Estado'/>
        </InfoSectionStyle>
    )
}