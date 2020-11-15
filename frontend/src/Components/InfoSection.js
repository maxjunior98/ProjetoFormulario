import React, { useState } from 'react'
import { InfoSectionStyle } from '../Styles/InfoSectionStyle'
import InfoBlock from './InfoBlock'
import { TextFieldStyle } from '../Styles/TextFieldStyle'
import { ButtonStyle } from '../Styles/ButtonStyle'
import Axios from 'axios'

export default function InfoSection() {

    const [cep, setCep] = useState([])
    const [street, setStreet] = useState([])
    const [neigh, setNeigh] = useState([])
    const [city, setCity] = useState([])
    const [uf, setUf] = useState([])

    async function Buscar(){
        await Axios.get(`https://viacep.com.br/ws/${cep}/json/`).then(function(Response) {
            console.log(Response.data)
            setStreet(Response.data['logradouro'])
            setNeigh(Response.data['bairro'])
            setCity(Response.data['localidade'])
            setUf(Response.data['uf'])

        }).catch(function (err){
            console.log('Error')
            setStreet('Error')
            setNeigh('Error')
            setCity('Error')
            setUf('Error')
            
        })
    }

    return(
        <>
            <TextFieldStyle placeholder='CEP' onChange={event => setCep(event.target.value)}/>
            <ButtonStyle onClick={Buscar} >Buscar Endereço</ButtonStyle>
            <InfoSectionStyle>
                <InfoBlock title='Rua' val={street}/>
                <InfoBlock title='Bairro' val={neigh}/>
                <InfoBlock title='Cidade' val={city}/>
                <InfoBlock title='Estado' val={uf}/>
            </InfoSectionStyle>
        </>
    );
}