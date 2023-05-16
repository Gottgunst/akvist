//################# LIBS #####################
import { useEffect } from "react";

//################ LAYOUT ####################
import { Service } from '../components/service/Service'
import { Numbers } from '../components/numbers/Numbers'

//############## INTERFACE ###################
interface IPageAboutProps {

}

export function PageAbout({  }:IPageAboutProps) {

  useEffect(() => {
    document.querySelector('header')?.classList.remove('header_inverted');
  },[]);

  return (
    <>
      <br/><br/>
      <br/><br/>
      <br/><br/>
      <br/><br/>
      <Numbers/>
      <Service/>
    </>
  );
}
export default PageAbout;
