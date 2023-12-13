import React from 'react';
import MainContent from "../../componentes/MainContent/MainContent";
import Titulo from "../../componentes/Titulo/Titulo";
// import Table from "./TableEva/TableEva";
import Container from "../../componentes/Container/Container";

const DetalhesEventosPage = () => {
    return (
        <MainContent>
            <Container>
                <div className="lista-detalhes-section">
                    <Titulo
                    titleText={"Eventos"}
                    potatoClass="custom-title"
                    color="black"
                    />
                </div>
            </Container>
        </MainContent>
    );
};

export default DetalhesEventosPage;