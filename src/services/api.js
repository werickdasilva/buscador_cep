import axios from 'axios'

const baseURL = 'https://viacep.com.br/ws/'

export const api = axios.create({
    baseURL: baseURL,
})
