import styled from "styled-components";
import { animetedElement } from "../animeted";
import device from "../device";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100vh;
    background: #2F2F2F;
`

export const Title = styled.h1`
    color: #fff;
    text-align: center;
    text-transform: uppercase;
    font-size: 2.5em;
    font-weight: 600;
    margin-block-end: 30px;
    letter-spacing: 3px;
    padding: 20px 0;
    animation: ${animetedElement} 2s;

    @media ${device.mobileS} {
        font-size: 2em;
    }
`


export const InputContainer = styled.div`
    font-size: 20px;
    padding: 7px 15px;
    width: 300px;
    margin: 20px 0;
    background: #fff;
    border-radius: 7px;
    display: flex;
    justify-content: space-between;
    box-shadow: 0 1px 7px 10px #00000033;

    @media ${device.mobileS} {
        width: 95%;
    }
`
export const InputCep = styled.input`
    background: transparent;
    outline: none;
    border: none;
    color: #000;
    width: 80%;
    font-size: 18px;
    &::placeholder {
        color: #2F2F2F;
    }
`

export const Button = styled.button`
    background: transparent;
    border: none;
    cursor: pointer;
    transition: transform;
    
    &:hover {
        transform: scale(1.2);
    }
`