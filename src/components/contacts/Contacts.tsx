import { IBranch, IContact } from '../../models';
import { Contact } from './Contact'

interface IContactsProps {
  base: IContact[]
  branch: IBranch[]
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
            <h3 className='branch__title'>Вист-Ставрополь</h3>
            <p >Ставрополь, 2-я Промышленная улица, 16, офис 6</p>
            <p className='branch__label branch__phone'>+7 8652 56-50-59</p>
            <p className='branch__label branch__schedule'>08:30–18:30, пн–пт</p>
          </div>
          <div className='branch_map'>

          </div>
          {/* <iframe className="contacts__map" src="https://yandex.ru/map-widget/v1/?um=constructor%3Ae8219820a96ab93f2b4f53d850885a474ac8e0c0a0726454ef905b5c3d122483&amp;source=constructor"></iframe> */}

        </div>
      </div>


  );
}

export default Contacts;
