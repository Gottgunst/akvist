import { Header } from './components/header/Header'
import { Quote } from './components/quote/Quote'
import { Contacts } from './components/contacts/Contacts'
import { Footer } from './components/footer/Footer'

import { PageDirections } from './pages/PageDirections'

import './pages/index.css';

import { useState } from 'react';
import { Route, Routes, Navigate, BrowserRouter } from 'react-router-dom'
import { useData } from './hooks/data'
import { IBranch, IBrand, IContact, IDirection } from './models';

import { preBranch } from './data/branch';
import { preDirections } from './data/directions';
import { preBrands } from './data/brands';
import { preContacts } from './data/contacts';
import { BranchContext } from './context'


interface IIncomeData {
  data: IDirection[] | IBrand[] | IContact[] | IBranch[]
  loading: boolean
  error: string
}


function App() {

  // получаем всю дату
  // пока дата грузится показываем бекап
  let page = 'Directions';
  const city = '*';
  const responseDirections:IIncomeData = useData({page, city});
  const baseDirections = responseDirections.loading ? preDirections : responseDirections.data as IDirection[];

  page = 'Branches';
  const responseBranches:IIncomeData = useData({page, city});
  const baseBranches = responseBranches.loading ? preBranch : responseBranches.data as IBranch[];

  page = 'Brands';
  const responseBrands:IIncomeData = useData({page});
  const baseBrands = responseBrands.loading ? preBrands : responseBrands.data as IBrand[];

  page = 'Contacts';
  const responseContacts:IIncomeData = useData({page, city});
  const baseContacts = responseContacts.loading ? preContacts : responseContacts.data as IContact[];


  const [targetBranch, setTargetBranch] = useState(()=> {
    const location = window.location.pathname.split('/');
    switch (location[1]) {
      case 'Krasnodar':
        return 'Краснодар';

      case 'Stavropol':
        return 'Ставрополь';

      case 'Pyatigorsk':
        return 'Пятигорск';

      default:
        return 'Ростов-на-Дону'

    }
  });


  return (
    <>
    {responseDirections.loading===false && console.log('=Loading Done=')}
    {responseBranches.error && <div className='overlay'>{responseBranches.error}</div>}

    <BranchContext.Provider value={{targetBranch, setTargetBranch}}>
      <BrowserRouter>

        <Header branches={baseBranches}/>

        <main>
          <section className='welcome'>

            <Quote />

          </section>

          <Routes>
            <Route path='/'
            element={<PageDirections baseDirections={baseDirections.filter(el=> {return el.city===targetBranch})} baseBrands={baseBrands}/>}>

              <Route path='Rostov-na-Donu' element={<Navigate to='/' replace />} />
              <Route path='Rostov' element={<Navigate to='/' replace />} />

              <Route path='Krasnodar'>
                <Route path='*' element={<Navigate to='/Krasnodar' replace />} />
              </Route>
              <Route path='Stavropol'>
               <Route path='*' element={<Navigate to='/Stavropol' replace />} />
              </Route>

              <Route path='Pyatigorsk'>
                <Route path='*' element={<Navigate to='/Pyatigorsk' replace />} />
              </Route>
              <Route path='Pitigorsk' element={<Navigate to='/Pyatigorsk' replace />} />
              <Route path='Patigorsk' element={<Navigate to='/Pyatigorsk' replace />} />
              <Route path='Piatigorsk' element={<Navigate to='/Pyatigorsk' replace />} />

              <Route path='*' element={<Navigate to='/' replace />} />

            </Route>
          </Routes>

          <section className='section section_type_contacts'>

            {baseBranches.map((branch, index) =>
              branch.city===targetBranch &&
              <Contacts
                contacts={baseContacts.filter(el=>{return el.city===targetBranch})}
                branch={branch}
                key={index}
              />)}

          </section>
        </main>

        <Footer
          branches={baseBranches}
          baseDirections={baseDirections.filter(el=> {return el.city===targetBranch})}
        />

      </BrowserRouter>
    </BranchContext.Provider>
    </>
  );
}

export default App;
