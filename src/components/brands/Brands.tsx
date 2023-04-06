import { useData } from '../../hooks/data';
import { IBrand } from '../../models';

interface IBrandProps {
  brand: IBrand
  noImage?: boolean
}

export function Brands({brand, noImage}: IBrandProps) {
  return (
    <li>
      {noImage && <span title={brand.description}>{brand.title}</span>}
      {!noImage && <img className='direction__brand' src={brand.image} alt={brand.title} title={brand.title}/>}
    </li>
  );
}

export default Brands;
