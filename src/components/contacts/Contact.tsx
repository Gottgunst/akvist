import { IContacts } from '../../models';

interface ContactProps {
  cont: IContacts
}


export function Contact({cont}: ContactProps, key: number) {
  return (

  <div className="contact">
    <h4 className="contact__title">{cont.title}</h4>
    <ul>
      <li className="contact__data">{cont.name}</li>
      <li className="contact__data">{cont.email}</li>
      <li className="contact__data">{cont.phone}</li>
      <li className="contact__data">{cont.site}</li>
    </ul>
  </div>

  );
}