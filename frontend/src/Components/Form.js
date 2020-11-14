import React from 'react'
import TextField from './TextField'
import { FormStyle } from '../Styles/FormStyle'
import InfoSection from './InfoSection'

export default function Form() {
    return (
        <FormStyle>
            <div>Insira seus Dados:</div>
            <TextField label="Nome Completo" />
            <TextField label="E-Mail" />
            <TextField label="Celular" />
            <TextField label="CEP" />
            <InfoSection />
            <TextField label="Numero" />
            <TextField label="Complemento" />
            <button>Enviar</button>
        </FormStyle>
    )
}