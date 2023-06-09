import { Direction } from '../components/direction/Direction'
import { Brands } from '../components/brands/Brands';

import { IBrand, IDirection } from '../models';
import { Outlet } from 'react-router-dom';
import { Cover } from '../components/cover/Cover';

interface IPageDirectionsProps {
  baseDirections: IDirection[]
  baseBrands: IBrand[]
}

export function PageDirections({ baseDirections, baseBrands}:IPageDirectionsProps) {

  // За один пробег делим направления на три группы
  // Находим id первого из комбинированных направлений
  // Собираем в строку бренды направлений из комбинированного блока

  let firstPart:JSX.Element[] = [];
  let combinePart:JSX.Element[] = [];
  let secondPart:JSX.Element[] = [];
  let combineFirstIndex:number = Infinity;
  let combineBrands:string = '';

  baseDirections.map((direction) => {
    if (direction.combine){

      combineBrands += direction.brands+'/';

      if(!Number.isFinite(combineFirstIndex)) combineFirstIndex = direction.id_dir;

      combinePart.push(
      <Direction direction={direction} baseBrands={baseBrands} key={direction.id_dir} />);

    }
    else if(direction.id_dir > combineFirstIndex)
      secondPart.push(
      <Direction direction={direction} baseBrands={baseBrands} key={direction.id_dir} />);
    else
      firstPart.push(
      <Direction direction={direction} baseBrands={baseBrands} key={direction.id_dir} />);
  });

  // Нарезаем строку брендов в массив
  // Фильтруем массив от повторов
  const combineArray = combineBrands.split('/');
  const targetBrands = combineArray.filter((value, index) => combineArray.indexOf(value) === index);

  return (
    <>
      <Outlet></Outlet>

      <Cover />
      <section className='section section_type_directions'>

        {firstPart}

      </section>

      <section className='section section_background_grey section_type_two-columns'>

        {combinePart}

      </section>

      <section className='section section_type_brands-grid'>
        <ul className='grid'>

          {baseBrands.map((el) => targetBrands.map((target)=>
            el.title === target && <Brands brand={el} key={el.id_brand}/>
            ))}

        </ul>
      </section>

      <section className='section section_type_directions'>

        {secondPart}

      </section>
    </>
  )
};
