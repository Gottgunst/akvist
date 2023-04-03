import { IDirectionLogos } from '../../models';

interface DirectionBrandProps {
  brand: IDirectionLogos
  noImage: boolean
}

export function Brands({brand}: DirectionBrandProps, {noImage}: DirectionBrandProps) {
  console.log(noImage);
  if (noImage == true) {
  return (
    <li>
      <img className='direction__logo' src={brand.image} alt={brand.name}/>
    </li>
  );} else {return (
    <li>
      {brand.name}
    </li>
  );}
}

export default Brands;
