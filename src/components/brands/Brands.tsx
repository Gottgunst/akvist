import { IDirectionBrands } from '../../models';

interface DirectionBrandProps {
  brand: IDirectionBrands
  noImage?: boolean
}

export function Brands({brand, noImage}: DirectionBrandProps) {
  return (

    <li>
      {noImage && <span title={brand.description}>{brand.name}</span>}
      {!noImage && <img className='direction__brand' src={brand.image} alt={brand.name}/>}
    </li>

  );
}

export default Brands;
