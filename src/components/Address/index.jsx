import { ColumnFlex } from "./styled";

export function Address(props) {
    return (
        <ColumnFlex>
            <span><span className="box">Rua: </span>{props.street}</span>
            <span><span className="box">Complemento: </span>{props.complement}</span>
            <span><span className="box">Bairro: </span>{props.district}</span>
            <span><span className="box">Cidade: </span>{props.city}</span>
            <span><span className="box">Distrito Federal: </span>{props.federalDistrict}</span>
        </ColumnFlex>
    )
}