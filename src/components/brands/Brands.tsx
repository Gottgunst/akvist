import { IDirectionLogos } from '../../models';

interface DirectionBrandProps {
  brand: IDirectionLogos
  noImage?: boolean
}

export function Brands({brand, noImage}: DirectionBrandProps) {
  return (

    <li>
      {noImage && brand.name}
      {!noImage && <img className='direction__brand' src={brand.image} alt={brand.name}/>}
    </li>

  );
}

export default Brands;
