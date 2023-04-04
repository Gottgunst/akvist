import { IDirection } from '../../models';
import { Brands } from '../../components/brands/Brands';

interface DirectProps {
  direction: IDirection
}

export function Direction({direction}: DirectProps) {
  const dirType = direction.accent||direction.combine ? 'direction_column' : '';
  const directionType = 'direction' + ' ' + dirType;
  return (

    <article className={directionType} id={direction.title}>

      <div className='direction__images'>
        <a className='direction__link' target='_self' href={direction.pageLink} title={direction.title}>
          <img src={direction.image} alt={direction.title} className='direction__img'/>
        </a>

        { !direction.combine &&
          <ul className='direction__brands'>
          {direction.logos.map(logos =>
            <Brands brand={logos} key={logos.id} />)}
          </ul>
        }

      </div>

      <div className='direction__texts'>
        <h3 className='direction__header'>{direction.title}</h3>

        { !direction.combine &&
          <ul className='direction__brands-name'>
          {direction.logos.map(logos =>
            <Brands brand={logos} noImage={true} key={logos.id}/>)}
          </ul>
        }

        <p className='direction__description'>{direction.description}</p>
        <button type='button' className='button direction__button'>{direction.buttonText}</button>
      </div>

    </article>

  );
}

export default Direction;
