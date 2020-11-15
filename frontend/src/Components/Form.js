import React from 'react'
import TextField from './TextField'
import { FormStyle } from '../Styles/FormStyle'
import InfoSection from './InfoSection'
import { ButtonStyle } from '../Styles/ButtonStyle'

export default function Form() {
    return (
        <FormStyle>
            <div>Insira seus Dados:</div>
            <TextField label="Nome Completo" />
            <TextField label="E-Mail" />
            <TextField label="Celular" />
            <InfoSection />
            <TextField label="Numero" />
            <TextField label="Complemento" />
            <ButtonStyle>Enviar</ButtonStyle>
        </FormStyle>
    )
}