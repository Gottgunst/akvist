import { IBrand, IDirection } from '../../models';
import { Brands } from '../../components/brands/Brands';

interface IDirectProps {
  direction: IDirection
  baseBrands: IBrand[]
}

export function Direction({direction, baseBrands}: IDirectProps) {

  const dirType = direction.accent||direction.combine ? 'direction_column' : '';
  const directionType = 'direction ' + dirType;
  const targetBrands =  direction.brands.split('/');

  return (

    <article className={directionType} id={direction.title}>

      <div className='direction__images'>
        <a className='direction__link' target='_self' href={direction.pageLink} title={direction.title}>
          <img src={direction.image} alt={direction.title} className='direction__img'/>
        </a>

        { !direction.combine &&
          <ul className='direction__brands'>

            {baseBrands.map((el) => targetBrands.map((target)=>
            el.title == target && <Brands brand={el} key={el.id_brand}/>
            ))}

          </ul>
        }

      </div>

      <div className='direction__texts'>
        <h2 className='direction__header'>{direction.title}</h2>

        { !direction.combine &&
          <ul className='direction__brands-name'>

            {baseBrands.map((el) => targetBrands.map((target)=>
            el.title == target && <Brands brand={el} noImage={true} key={el.id_brand}/>
            ))}

          </ul>
        }

        <p className='direction__description'>{direction.description}</p>
        <button type='button' className='button direction__button'>{direction.buttonText}</button>
      </div>

    </article>

  );
}

export default Direction;
