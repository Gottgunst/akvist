import { IDirectionLogos } from '../../models';

interface DirectLogoProps {
  logo: IDirectionLogos
}

export function Logos({logo}: DirectLogoProps) {
  return (
    <li>
      <img className='direction__logo' src={logo.image} alt={logo.name}/>
    </li>
  );
}