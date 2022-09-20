import { Button, Container, InputCep, InputContainer, Title } from "./styled"
import { AiOutlineSearch } from "react-icons/ai"
import { ResultZipCode } from "../ResultZipCode"
import { useState } from "react"
import { api } from "../../services/api"

export function App() {

    const [inputZipCode, setInputZipCode] = useState('')
    const [zipCode, setZipCode] = useState('')

    async function handleZipCode() {
        if (inputZipCode === '') {
            alert('Cep Vazio ')
            return
        }

        await api.get(`${inputZipCode}/json`).then(response => {
            setZipCode(response.data)
            setInputZipCode('')
        }).catch(_ => {
            alert('Erro cep Não Existe')
            setZipCode('')   
        })
    }

    const searchZipCode = e => setInputZipCode(e.target.value)

    const clickedSearch = _ => handleZipCode()
    
    const keyEnter = e => {
        if (e.code == 'Enter') {
            clickedSearch()
        }
    }

    return (
        <Container>
            <Title>Buscador de CEP</Title>
            <InputContainer>
                <InputCep
                    type="text"
                    placeholder="Digite seu Cep"
                    value={inputZipCode}
                    onChange={searchZipCode}
                    onKeyDown={keyEnter}
                />
                <Button onClick={clickedSearch}>
                    <AiOutlineSearch size={25} color="#2F2F2F" />
                </Button>
            </InputContainer>
            {Object.keys(zipCode).length > 0 && (
                <ResultZipCode data={zipCode}></ResultZipCode>
            )}
        </Container>
    )
}