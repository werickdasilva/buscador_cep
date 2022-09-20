import { Address } from "../Address";
import { Cep, Divider, ResultArea } from "./styled";

export function ResultZipCode(props) {
    return (
        <ResultArea>
            <Cep>Cep: {props.data.cep}</Cep>
            <Divider />
            <Address
                street={props.data.logradouro}
                complement={props.data.complemento}
                district={props.data.bairro}
                city={props.data.localidade}
                federalDistrict={props.data.uf}
            />
        </ResultArea>
    )
}