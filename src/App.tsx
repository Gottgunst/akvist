import { Header } from './components/header/Header'
import { Quote } from './components/quote/Quote'
import { Direct } from './components/direct/Direct'
import { Contacts } from './components/contacts/Contacts'
import { Footer } from './components/footer/Footer'

import './components/main/main.css'
import {directions} from './data/directions'



function App() {
  return (
    <>
      <Header/>
      <main>
        <section className='main'>
          <Quote /> 
          {directions.map ((direction, index) => index<4&&!direction.deAccent ?<Direct direction={direction} key={direction.id}/>:"")}
        </section>
        <section className='de-accent'>
          <div className='de-accent__wrapper'>
            {directions.map ((direction) => direction.deAccent ? <Direct direction={direction} key={direction.id}/>:"")}
          </div>
        </section>
        <section className='main'>
          {directions.map ((direction, index) => index>5&&!direction.deAccent ?<Direct direction={direction} key={direction.id}/>:"")}
        </section>
        <Contacts></Contacts>
      </main>
      <Footer/>
    </>
  );
}

export default App;
