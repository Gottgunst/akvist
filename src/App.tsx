import { Header } from './components/header/Header'
import { Quote } from './components/quote/Quote'
import { Direction } from './components/direction/Direction'
import { Contacts } from './components/contacts/Contacts'
import { Footer } from './components/footer/Footer'

import { directions } from './data/directions'


function App() {
  return (
    <>
      <Header/>

      <main>
        <section className='welcome'>

          <Quote />

        </section>

        <section className='section'>

          {directions.map ((direction, index) =>
            index < 3 && !direction.deAccent ?
            <Direction direction={direction} key={direction.id} /> : "")}

        </section>

        {/* <section className='section section_background_grey'>
          <div className='directions_type_two-columns'>

            {directions.map ((direction) => direction.deAccent ? <Direction direction={direction} key={direction.id}/>:"")}

          </div>
        </section> */}


        {/* <section className='section'>

          {directions.map ((direction, index) => index>5&&!direction.deAccent ?<Direction direction={direction}/>:"")}

        </section> */}

        {/* <Contacts></Contacts> */}

      </main>

      {/* <Footer/> */}
    </>
  );
}

export default App;
