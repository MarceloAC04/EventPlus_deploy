import React, { useEffect, useState } from "react";
import MainContent from "../../componentes/MainContent/MainContent";
import useParams from 'react-router-dom';
import Titulo from "../../componentes/Titulo/Titulo";
import Container from "../../componentes/Container/Container";
import TableDe from "./TableDe/TableDe";
import { useContext } from "react";
import { UserContex } from "../../context/AuthContext";
import api, { commentaryEventResource, eventResource } from "../../Services/Service";
import "./DetalhesEventosPage.css";

const DetalhesEventosPage = () => {
  const { userData, setUserData } = useContext(UserContex);
  const {idEvento, nomeEvento} = useParams()

  const [eventos, setEventos] = useState([]);
  const [comentarios, setComentarios] = useState([]);

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

  async function getComentarios() {
    try {
      const route = userData.role == 'Aluno' ? 'Listar' : 'ListarSomenteExibe';
      const promise = await api.get(`${commentaryEventResource}/${route}/${idEvento}`);
      const dados = promise.data;

      setComentarios(dados);
    } catch (error) {
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
