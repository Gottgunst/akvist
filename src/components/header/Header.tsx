export function Header() {
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
            <a href='#' className='header__link'>+7 8652 56-50-59</a>
            </p>
            <select className='header__city'>
              <option>Ставрополь</option>
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
