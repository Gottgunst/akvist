import { IBranch } from "../../models";

interface IHeaderProps {
  branches: IBranch[]
  value: string
  onChange: any
}

export function Header({branches, value, onChange}:IHeaderProps) {

  const change = function (event:any) {
    console.log("Change data to "+ event.target.value);
    onChange(event.target.value);
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
              (branch.city == value &&
                (<a href={`tel:+${branch.phone}`} key={branch.id_branch} className='header__link' target="_blank">
                +{branch.phone}
                </a>)
            ))}

            </p>

            <select className='header__select'
              value={value}
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
