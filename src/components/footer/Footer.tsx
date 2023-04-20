import { IBranch, IDirection } from '../../models';

interface IFooterProps {
  branches: IBranch[]
  baseDirections: IDirection[]
}


export function Footer({branches, baseDirections}:IFooterProps) {

  return (
    <footer className='footer'>
      <div className='section section_type_footer'>
        <nav className='site-map'>
          <div className='site-map__block' aria-label='Блок 1'>
            <h2 className='site-map__title'>Решения</h2>

            <ul className='site-map__items'>

              {baseDirections.map(direction => !direction.combine &&
                <li key={direction.id_dir}>
                  <a href={'#'+direction.pageLink} className='link site-map__link'>{direction.title}</a>
                </li>
              )}

            </ul>
          </div>
          <div className='site-map__block' aria-label='Блок 2'>
            <h2 className='site-map__title'>Строительно-отделочные материалы</h2>
            <ul className='site-map__items'>

              {baseDirections.map(direction => direction.combine &&
                <li key={direction.id_dir}>
                  <a href={'#'+direction.pageLink} className='link'>{direction.title}</a>
                </li>
              )}

            </ul>
          </div>
          <div className='site-map__block' aria-label='Блок 3'>
            <h2 className='site-map__title'>Филиалы</h2>
            <ul className='site-map__items'>
              {branches.map(branch =>
                <li key={branch.id_branch}>
                  <a href={branch.pageLink} className='link'>{branch.city}</a>
                </li>
              )}
            </ul>
          </div>
          <div className='site-map__block' aria-label='Блок 4'>
            <h2 className='site-map__title'>О компании</h2>
            <ul className='site-map__items'>
              <li>
                <a href='#' className='link'>О нас</a>
              </li>
              <li>
                <a href='#' className='link'>Сервис</a>
              </li>
            </ul>
          </div>
        </nav>

        <div className='branch__data'>
            <p className='branch__label' aria-label='Местонахождение'>
              ss{/* {branch.address} */}
            </p>

            {/* {branch.address_second && <p>{branch.address_second}</p>} */}

            <p className='branch__label' aria-label='Расписание'>
              {/* {branch.schedule} */} 22
            </p>

            <p className='branch__label' aria-label='Телефон'>
              ss
              {/* <a href={`tel:+${branch.phone}`} target='_blank' className='contact__link'> */}
              {/* +{branch.phone} </a>*/}
            </p>

          </div>


          <div className='law-data'>
            <div className='logo'></div>
            <p className='law-data__copyright'>© {new Date().getFullYear()} ООО “ВИСТ”</p>
            <p className='law-data__politics'>Продолжая использовать наш сайт, вы даете согласие на обработку файлов Cookies и других пользовательских данных, в соответствии с Политикой конфиденциальности и Пользовательским соглашением</p>
          </div>
      </div>
    </footer>
  );
}
