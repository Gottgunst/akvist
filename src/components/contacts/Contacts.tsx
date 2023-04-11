import React from 'react';
import { IBranch, IContact } from '../../models';
import { Contact } from './Contact'

interface IContactsProps {
  base: IContact[]
  branch: IBranch
}

export function Contacts({base, branch}:IContactsProps) {

const mapStatic = `url(https://api-maps.yandex.ru/services/constructor/1.0/static/?um=constructor%${branch.map}&width=650&height=450)`;
const mapWidget = `https://yandex.ru/map-widget/v1/?um=constructor%${branch.map}&scroll=false`;
const mapLink = (e:any) => {window.open(`https://yandex.ru/maps/?um=constructor%${branch.map}&source=constructorStatic`);};


  return (

      <div className="contacts">
        <h2 className="section__title">Контакты руководителей</h2>

        <div className="contacts__grid">

          {base.map (contact => <Contact contact={contact} key={contact.id_con}/>)}

        </div>
        <div className="branch">
          <div className="branch__data">
            <h3 className='branch__title'>
              {branch.title}
            </h3>
            <p>
              {branch.address}
            </p>

            {branch.address_second && <p>{branch.address_second}</p>}

            <p className='branch__label branch__phone'>
              <a href={`tel:+${branch.phone}`} target='_blank' className='contact__link'>
              +{branch.phone}
            </a></p>

            <p className='branch__label branch__schedule'>
              {branch.schedule}
            </p>

          </div>
          <div className='branch__map' style={{backgroundImage:mapStatic}} onClick={mapLink}>
            <iframe className="branch__iframe" src={mapWidget}></iframe>
          </div>
        </div>
      </div>


  );
}

export default Contacts;
