import { useEffect } from 'react'
import { Quote } from '../quote/Quote'



export function Cover() {

  //## TO-DO ## блок для создания стиля с персональной фоновой картинкой взятой из БД

  useEffect(() => {
    document.querySelector('header')?.classList.add('header_inverted');
  },[]);


  return (
    <>
      <section className='cover'>

        <div className='cover__wrapper'>
          <h1 className='cover__motto'>
              Готовые решения для строительства и ремонта
          </h1>
        </div>

      </section>
      <section className='welcome'>

        <Quote />

      </section>
    </>
  )
}

