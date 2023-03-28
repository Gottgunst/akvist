import "./contacts.css"

export function Contacts() {
  return (

    <section className="contacts">
      <div className="contacts__wrapper">
        <h2 className="section__title">Контакты руководителей</h2>
        <div className="contacts__grid">
          <div className="contact">
            <h4 className="contact__title">Потолочные системы</h4>
            <ul>
              <li className="contact__data">Павел Лагунов</li>
              <li className="contact__data">email</li>
              <li className="contact__data">phone</li>
              <li className="contact__data">?site</li>
            </ul>
          </div>
          <div className="contact">
            <h4 className="contact__title">Потолочные системы</h4>
            <ul>
              <li className="contact__data">Павел Лагунов</li>
              <li className="contact__data">email</li>
              <li className="contact__data"><a href="tel:" className="contact__link">phone</a></li>
              <li className="contact__data">?site</li>
            </ul>
          </div>
          <div className="contact">
            <h4 className="contact__title">Потолочные системы</h4>
            <ul>
              <li className="contact__data">Павел Лагунов</li>
              <li className="contact__data">email</li>
              <li className="contact__data">phone</li>
            </ul>
          </div>
          <div className="contact">
            <h4 className="contact__title">Потолочные системы</h4>
            <ul>
              <li className="contact__data">Павел Лагунов</li>
              <li className="contact__data">email</li>
              <li className="contact__data">phone</li>
              <li className="contact__data">?site</li>
            </ul>
          </div>
          <div className="contact">
            <h4 className="contact__title">Потолочные системы</h4>
            <ul>
              <li className="contact__data">Павел Лагунов</li>
              <li className="contact__data">email</li>
              <li className="contact__data">phone</li>
              <li className="contact__data">?site</li>
            </ul>
          </div>
        </div>
        <div className="contacts__branch">
          <div className="contacts__address"></div>
          <div className="contacts__map"></div>
        </div>
      </div>
    </section>

  );
}