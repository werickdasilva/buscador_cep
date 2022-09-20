import styled from "styled-components";
import device from "../device";

export const ColumnFlex = styled.div`
    display: flex;
    flex-direction:column;
    & span {
        line-height: 1.5em;
        font-size: 1.2em;
    }
    & span.box {
        font-weight: 600;
    }

    @media ${device.mobileS} {
        & span {
            font-size: 1em;
        }
    }
`;