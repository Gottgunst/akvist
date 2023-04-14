import { useContext } from "react";
import { IBranch } from "../../models";
import { useNavigate } from "react-router-dom";
import { BranchContext } from "../../context";

interface IHeaderProps {
  branches: IBranch[]
}

export function Header({branches}:IHeaderProps) {

  const {targetBranch, setTargetBranch} = useContext(BranchContext);
  const navigate = useNavigate();

  const change = function (event:any) {

    event.preventDefault();

    console.log("Change data to "+ event.target.value);
    setTargetBranch(event.target.value);

    branches?.forEach(branch => branch.city === event.target.value ? navigate(branch.pageLink):"");
  }

  return (

    <header className='header'>
      <div className='header__wrapper'>
        <div className='header__logo'>
          <img src='./images/logos/Akvist.svg' alt='Логотип АКВИСТ' className='logo' />
        </div>

        <nav className='header__nav'>
          <ul className='header__menu'>
            <li><a href='#' className='header__link'>Продукты</a></li>
            <li>Сервис</li>
            <li>Интернет-магазин</li>
            <li>Контакты</li>
          </ul>

          <div className='header__contact'>
            <p className='header__phone'>

            {branches.map(branch =>
              (branch.city === targetBranch &&
                (<a href={`tel:+${branch.phone}`} key={branch.id_branch} className='header__link' target="_blank" rel="noreferrer">
                +{branch.phone}
                </a>)
            ))}

            </p>

            <select className='header__select'
              value={targetBranch}
              onChange={change}>

              {branches.map(branch => (
                <option className="header__city" value={branch.city} key={branch.id_branch}>{branch.city}</option>
              ))}

            </select>

          </div>
        </nav>
        <nav className="header__menu-button">

          {/* POP-UP version */}

        </nav>

        <h1 className='header__motto'>
          Готовые решения для строительства и ремонта
        </h1>
      </div>
    </header>

  );
}
