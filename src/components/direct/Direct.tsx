import { IDirection } from '../../models';
import {Logos} from './Logos';
import "./direction.css";

interface DirectProps {
  direction: IDirection
}




export function Direct({direction}: DirectProps, key: number) {
  const dirType = direction.accent||direction.deAccent ? 'direction-column' : '';
  const directionType = 'direction '+ dirType;

  return (

    <section className={directionType}>
      <div className='direction__images'>
        <img src={direction.image} alt={direction.title} className='direction__img'/>
        <ul className='direction__logos'>
          {direction.logos.map(logos => <Logos logo={logos} key={logos.id} />)}
        </ul>
      </div>
      <div className='direction__texts'>
        <h3 className='direction__head'>{direction.title}</h3>
        <p className='direction__description'>{direction.description}</p>
        <button className='direction__button'>{direction.buttonText}</button>
      </div>
    </section>

  );
}