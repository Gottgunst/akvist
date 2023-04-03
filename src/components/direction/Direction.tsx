import { IDirection } from '../../models';
import { Brands } from '../../components/brands/Brands';

interface DirectProps {
  direction: IDirection
}


export function Direction({direction}: DirectProps) {
  const dirType = direction.accent||direction.deAccent ? 'direction-column' : '';
  const directionType = 'direction '+ dirType;
  return (

    <article className={directionType} id={direction.title}>

      <div className='direction__images'>
        <img src={direction.image} alt={direction.title} className='direction__img'/>
        <ul className='direction__logos'>
          {direction.logos.map(logos =>
            <Brands brand={logos} noImage={false} key={logos.id} />)}
        </ul>
      </div>

      <div className='direction__texts'>
        <h3 className='direction__header'>{direction.title}</h3>
        <ul className='direction__logos direction__logos_only-text'>
          {direction.logos.map(logos =>
            <Brands brand={logos} noImage={true} key={logos.id}/>)}
        </ul>
        <p className='direction__description'>{direction.description}</p>
        <button className='direction__button'>{direction.buttonText}</button>
      </div>
    </article>

  );
}

export default Direction;
