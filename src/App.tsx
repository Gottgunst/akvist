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

        <section className='section section_type_directions'>

          {directions.map ((direction, index) =>
            index < 4 && !direction.combine ?
            <Direction direction={direction} key={direction.id} /> : "")}

        </section>

        <section className='section section_background_grey section_type_two-columns'>

            {directions.map ((direction) => direction.combine ? <Direction direction={direction} key={direction.id}/>:"")}

        </section>


        {/* <Contacts></Contacts> */}

      </main>

      {/* <Footer/> */}
    </>
  );
}

export default App;
