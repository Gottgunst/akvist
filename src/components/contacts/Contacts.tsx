import { Contact } from './Contact'

import "./contacts.css"
import { contacts } from "../../data/contacts";

export function Contacts() {
  return (

    <section className="contacts">
      <div className="contacts__wrapper">
        <h2 className="section__title">Контакты руководителей</h2>

        <div className="contacts__grid">

          {contacts.map (contact => <Contact cont={contact}/>
            )}

        </div>
        <div className="contacts__branch">
          <div className="contacts__address">
            

          </div>
          <div className="contacts__map"></div>
        </div>
      </div>
    </section>

  );
}