import styled from "styled-components";
import { animetedElement } from "../animeted";
import device from "../device";

export const ResultArea = styled.main`
    display: flex;
    flex-direction: column;
    width: 500px;
    border-radius: 7px;
    box-shadow: 0 1px 7px 10px #00000033;
    padding: 0 10px;
    background: #fff;
    animation: ${animetedElement} 2s;
    
    @media ${device.mobile} {
        width: 95%
    }
`
export const Cep = styled.h2`
    margin-block-start: 10px;
    text-transform: uppercase;

    @media ${device.mobileS} {
        font-size: 14px;
    }
`

export const Divider = styled.hr`
    color: #fff;
    margin: 15px 0;
`