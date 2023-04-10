import { IBranch, IContact } from '../../models';
import { Contact } from './Contact'

interface IContactsProps {
  base: IContact[]
  branch: IBranch
}

export function Contacts({base, branch}:IContactsProps) {
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
          <div className='branch__map'>
            <iframe className="branch__iframe" src="https://yandex.ru/map-widget/v1/?um=constructor%3Ae8219820a96ab93f2b4f53d850885a474ac8e0c0a0726454ef905b5c3d122483&amp;source=constructor"></iframe>
          </div>
        </div>
      </div>


  );
}

export default Contacts;
