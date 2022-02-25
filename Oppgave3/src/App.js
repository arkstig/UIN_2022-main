import './styles.css'
import { useState } from 'react'
import Aside from './components/Aside'
import Navigation from './components/Navigation'
import Main from './components/Main'
import Footer from './components/Footer'

/*

- Style i henhold til design.png. Se filen i mappen public
  - Husk å mobiltilpasse (se styles.css TODO)
- Flytt koden under ut i komponenter. F.eks Navigation, Sidebar m.fl
- Bruk nødvendig antall props for å gjøre komponentene fleksible
- Gjør det mulig å trykke på "send" (sende skjema). Vis hva brukeren senden ved hjelp av state. 
Innholdet skal kun vises etter at send er trykket. Husk .preventDefault() for å unngå refresh av siden.
- Det er to knapper i koden i <aside>. Ved klikk på denne skal <span> som ligger under vises / skjules for 
den knappen som trykkes på.

*/

export default function App() {
  const innlegg = [
    {
      id: 1,
      image:
        'https://images.unsplash.com/photo-1644480417721-0aa386122e2f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80',
      title: 'Overskrift 1',
      description:
        'Shaman taxidermy pickled austin readymade pinterest tumeric aesthetic viral keffiyeh quinoa venmo distillery tousled.',
    },
    {
      id: 2,
      image:
        'https://images.unsplash.com/photo-1644433329707-2b528437a7e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      title: 'Overskrift 2',
      description:
        "Tousled bespoke you probably haven't heard of them stumptown pour-over.",
    },
  ]
  return (
    <>
      <Navigation />
      <div className="Grid">
        <Main />
        <Aside innlegg={innlegg} />
        <Footer />
      </div>
    </>
  )
}
