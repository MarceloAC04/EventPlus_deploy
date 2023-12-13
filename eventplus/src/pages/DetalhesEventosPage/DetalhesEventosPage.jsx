import React, { useEffect, useState } from "react";
import MainContent from "../../componentes/MainContent/MainContent";
import Titulo from "../../componentes/Titulo/Titulo";
import Container from "../../componentes/Container/Container";
import TableDe from "./TableDe/TableDe";
import { useContext } from "react";
import { UserContex } from "../../context/AuthContext";
import api, { eventResource } from "../../Services/Service";
import "./DetalhesEventosPage.css";

const DetalhesEventosPage = () => {
  const { userData, setUserData } = useContext(UserContex);

  const [eventos, setEventos] = useState([]);

  async function loadEvents() {
    try {
      const retorno = await api.get(eventResource);
      setEventos(retorno.data);
      console.log(retorno);
    } catch (error) {
      console.log("Erro na api");
      console.log(error);
    }
  }
  useEffect(() => {
    loadEvents();
  }, []);

  return (
    <>
      <MainContent>
        <div className="lista-detalhes-section">
          <Container>
            <Titulo
              titleText={"Detalhe-Eventos"}
              color="black"
            />
            <TableDe dados={eventos} />
          </Container>
        </div>
      </MainContent>
    </>
  );
};

export default DetalhesEventosPage;
