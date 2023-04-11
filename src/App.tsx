import { Header } from './components/header/Header'
import { Quote } from './components/quote/Quote'
import { Contacts } from './components/contacts/Contacts'
import { Footer } from './components/footer/Footer'

import { PageDirections } from './pages/PageDirections'


import { useState } from 'react';
import { Route, Routes, Link } from 'react-router-dom'
import { useData } from './hooks/data'
import { IBranch, IBrand, IContact, IDirection } from './models';

import { preBranch } from './data/branch';
import { preDirections } from './data/directions';
import { preBrands } from './data/brands';
import { preContacts } from './data/contacts';


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

  const [branchTarget, setBranchTarget] = useState("Ростов-на-Дону");

  return (
    <>

      {responseDirections.loading==false && console.log("=Loading Done=")}
      {responseBranches.error && <div className='overlay'>{responseBranches.error}</div>}

      <Header value={branchTarget} branches={baseBranches} onChange={setBranchTarget}/>

      <main>
        <section className='welcome'>

          <Quote />

        </section>

        <Routes>
          <Route
            path='/:branch?/'
            element={<PageDirections baseDirections={baseDirections.filter(el=> {return el.city===branchTarget})} baseBrands={baseBrands}/>}
          />
        </Routes>


        <section className='section section_type_contacts'>

          {baseBranches.map((branch, index) =>
            branch.city===branchTarget &&
            <Contacts
              contacts={baseContacts.filter(el=>{return el.city===branchTarget})}
              branch={branch}
              key={index}
            />)}

        </section>
      </main>

      <Footer/>

    </>
  );
}

export default App;
