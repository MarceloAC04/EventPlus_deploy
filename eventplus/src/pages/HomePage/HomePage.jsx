import React, { useEffect, useState } from "react";
import "./HomePage.css";
import Banner from "../../componentes/Banner/Banner";
import Container from "../../componentes/Container/Container";
import NextEvent from "../../componentes/NextEvent/NextEvent";
import ContactSection from "../../componentes/ContactSection/ContactSection";
import MainContent from "../../componentes/MainContent/MainContent";
import VisionSection from "../../componentes/VisionSection/VisionSection";
import Titulo from "../../componentes/Titulo/Titulo";
import api, { previousEventResource } from "../../Services/Service";
import { nextEventResource } from "../../Services/Service";
import PreviousEvent from "../../componentes/PreviousEvent/PreviousEvent";

const HomePage = () => {
  const [nextEvents, setNextEvents] = useState([]); 
  const [previousEvents, setPreviousEvents] = useState([]); 

  useEffect(()=> {
    async function  getNextEvents() {
      try {
        const promise = await api.get(nextEventResource)
        const dados = await promise.data;

        setNextEvents(dados); //atualiza o estado
      } catch (error) {
        alert("Deu ruim na api!")
      }   
    }

    async function getPreviousEvents() {
      try {
        const promise = await api.get(previousEventResource)
        const dados = await promise.data;

        setPreviousEvents(dados);
      } catch (error) {
        alert("Deu ruim na api!")
      }
    }
     getNextEvents(); //roda a função
     getPreviousEvents();
  }, [])



  return (
    <MainContent>
      <Banner />

      <section className="proximos-eventos">
        <Container>
          <Titulo titleText={"Próximos Eventos"} color="#fde100" />

          <div className="events-box">

           {
            nextEvents.map((e) => {
              return (
              <NextEvent 
              key={e.idEvento}
              title={e.nomeEvento}
              description={e.descricao}
              eventDate={e.dataEvento}
              idEvent={e.idEvento}
              />
              );
            })
           }

          </div>
        </Container>
        
        <Container>
          <Titulo titleText={"Eventos Anteriores"} color="#fde100" />

          <div className="events-box">

           {
            previousEvents.map((p) => {
              return (
              <PreviousEvent
              key={p.idEvento}
              title={p.nomeEvento}
              description={p.descricao}
              eventDate={p.dataEvento}
              idEvent={p.idEvento}
              />
              );
            })
           }

          </div>
        </Container>
      </section>

      <VisionSection />
      <ContactSection />
    </MainContent>
  );
};

export default HomePage;
