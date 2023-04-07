import { Header } from './components/header/Header'
import { Quote } from './components/quote/Quote'
import { Direction } from './components/direction/Direction'
import { Brands } from './components/brands/Brands';
import { Contacts } from './components/contacts/Contacts'
import { Footer } from './components/footer/Footer'

import { useData } from './hooks/data'
import { IBrand, IContact, IDirection } from './models';

import { preDirections } from './data/directions';
import { preBrands } from './data/brands';
import { preContacts } from './data/contacts';

interface IIncomeData {
  data: IDirection & IBrand & IContact & any
  loading: boolean
  error: string
}

function App() {

  let city = 'Ростов-на-Дону';

  // получаем дату по всем направлениям
  // пока дата грузится показываем бекап
  let page = 'Directions';
  const responseDirections:IIncomeData = useData({page, city});
  const directions:IDirection[] = responseDirections.loading ? preDirections : responseDirections.data;

  // получаем дату по всем брендам
  // пока дата грузится показываем бекап
  page = 'Brands';
  const responseBrands:IIncomeData = useData({page});
  const baseBrands:IBrand[] = responseBrands.loading ? preBrands : responseBrands.data;

  // получаем дату по всем контактам
  // пока дата грузится показываем бекап
  page = 'Contacts';
  const responseContacts:IIncomeData = useData({page});
  const baseContacts:IContact[] = responseContacts.loading ? preContacts : responseContacts.data;


  // Собираем в строку все бренды направлений из комбинированного блока
  // Нарезаем строку в массив
  // Фильтруем массив от повторов
  let combineBrands:string = "";
  directions.forEach((el) => el.combine ? combineBrands += el.brands + '/':"");
  const combineArray = combineBrands.split('/');
  const targetBrands = combineArray.filter((value, index) => combineArray.indexOf(value) === index);

  return (
    <>

      {/* {responseDirections.loading && <div className='overlay'>Загрузка данных из таблицы</div>} */}
      {responseDirections.error && <div className='overlay'>{responseDirections.error}</div>}

      <Header/>

      <main>
        <section className='welcome'>

          <Quote />

        </section>
        <section className='section section_type_directions'>

          {directions.map((direction, index) =>
            index < 4 && !direction.combine ?
            <Direction direction={direction} baseBrands={baseBrands} key={direction.id_dir} /> : "")}

        </section>
        <section className='section section_background_grey section_type_two-columns'>

          {directions.map((direction) =>
            direction.combine ?
            <Direction direction={direction} baseBrands={baseBrands} key={direction.id_dir}/> : "")}

        </section>
        <section className='section section_type_brands-grid'>
          <ul className='grid'>

            {baseBrands.map((el) => targetBrands.map((target)=>
              el.title == target && <Brands brand={el} key={el.id_brand}/>
              ))}

          </ul>
        </section>
        <section className='section section_type_directions'>

          {directions.map((direction, index) =>
            index > 4 && !direction.combine ?
            <Direction direction={direction} baseBrands={baseBrands} key={direction.id_dir} /> : "")}

        </section>
        <section className='section section_type_contacts'>

          <Contacts />

        </section>
      </main>

      {/* <Footer/> */}
    </>
  );
}

export default App;
