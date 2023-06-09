import { Link, NavLink } from 'react-router-dom';
import { IBranch, IDirection } from '../../models';
import { useContext } from 'react';
import { BranchContext } from '../../context';

interface IFooterProps {
  branches: IBranch[]
  baseDirections: IDirection[]
}

export function Footer({branches, baseDirections}:IFooterProps) {

  const {targetBranch, setTargetBranch} = useContext(BranchContext);

  return (
    <footer className='footer'>
      <div className='section section_type_footer'>
        <nav className='site-map'>

{/* дважды иду по одному и тому же циклу, нужно переписать ↓↓↓ */}

          {baseDirections.length>0 && <div className='site-map__block' aria-label='Блок 1'>
            <h2 className='site-map__title'>Решения</h2>

            <ul className='site-map__items'>

              {baseDirections.map(direction => !direction.combine &&
                <li key={direction.id_dir}>
                  <a href={'#'+direction.pageLink} className='link site-map__link'>{direction.title}</a>
                </li>
              )}

            </ul>
          </div>}

{/* дважды иду по одному и тому же циклу, нужно переписать ↓↓↓ */}

          {baseDirections.length>0 &&
          baseDirections.filter(direction => direction.combine) &&
          <div className='site-map__block' aria-label='Блок 2'>
            <h2 className='site-map__title'>Строительно-отделочные материалы</h2>
            <ul className='site-map__items'>

              {baseDirections.map(direction => direction.combine &&
                <li key={direction.id_dir}>
                  <a href={'#'+direction.pageLink} className='link'>{direction.title}</a>
                </li>
              )}

            </ul>
          </div>}

          <div className='site-map__block' aria-label='Блок 3'>
            <h2 className='site-map__title'>Филиалы</h2>
            <ul className='site-map__items'>
              {branches.map(branch =>
                <li key={branch.id_branch}>
                  <NavLink to={branch.pageLink} className='link'>
                  {branch.city}</NavLink>
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

        {branches.map(branch => branch.city === targetBranch &&
        <div className='footer__branch' key={branch.id_branch}>
            <p className='branch__label footer__label' aria-label='Местонахождение'>
               {branch.address}

               {/* {branch.address_second && <p>{branch.address_second}</p>} */}
            </p>

            <p className='branch__label footer__label' aria-label='Расписание'>
              {branch.schedule}
            </p>

            <p className='branch__label footer__label footer__phone' aria-label='Телефон'>
              <a href={`tel:+${branch.phone}`} className='link'>+{branch.phone}</a>
            </p>

          </div>
        )}

          <div className='law-data'>
            <div className='logo law-data__logo'>
              <svg viewBox="0 0 218 99">
                <path d="M90.263 31.872h10.673l3.829 25.917h.928l6.613-25.917h10.674l-9.629 32.922c-.117.467-.581.817-1.161.817H96.412c-.58 0-1.044-.467-1.16-.934l-4.99-32.805Z M41.767 61.291H30.629l-1.16 4.32h-10.21l10.21-33.74h18.33l4.41 33.74h-10.21l-.232-4.32ZM39.33 39.226h-2.552l-3.829 14.36h7.774l-1.393-14.36ZM79.357 48.683l7.89 16.928H76.92c-.464 0-.928-.234-1.045-.7l-5.104-11.675-4.177.35-.928 10.974c0 .584-.58 1.05-1.16 1.05h-9.05l2.9-33.739h10.094l-1.16 14.01 4.293-.467 5.8-13.543h10.442l-8.469 16.812ZM128.665 31.872h9.05L134.93 64.56c0 .584-.58 1.05-1.16 1.05h-9.05l2.785-32.688c0-.583.58-1.05 1.16-1.05ZM142.239 64.91l-1.972-.35 1.392-5.837c.116-.584.696-.934 1.277-.934 4.408.467 7.889.817 10.441.817 2.901 0 4.525-.934 4.641-2.685 0-.584-.232-1.167-.812-1.518-.58-.35-1.624-.817-2.785-1.167-.812-.234-1.392-.467-1.74-.7-4.176-1.285-7.077-2.686-8.701-4.32-1.625-1.635-2.437-3.736-2.205-6.188.348-3.502 1.741-6.187 4.293-7.938 2.553-1.752 5.917-2.686 10.094-2.686 1.74 0 3.364.117 4.873.35 1.508.234 4.292.585 8.353 1.285l-1.16 5.837c-.116.584-.696.934-1.276.934-4.409-.467-7.774-.7-10.21-.7-3.133 0-4.757.7-4.873 2.218 0 .467.348.934 1.044 1.284.696.35 1.857.817 3.481 1.284 1.624.584 2.668.934 3.132 1.051 2.437.934 4.293 1.751 5.569 2.685 1.276.817 2.205 1.868 2.669 3.035.464 1.168.696 2.686.464 4.553-.232 2.335-.928 4.32-2.321 5.955a12.663 12.663 0 0 1-5.337 3.735 20.227 20.227 0 0 1-7.193 1.285c-3.364.116-7.077-.35-11.138-1.285ZM180.874 39.693h-9.166l.58-6.77c0-.584.581-1.052 1.161-1.052h27.264l-.58 6.772c0 .583-.58 1.05-1.16 1.05h-8.005l-2.089 24.75c0 .584-.58 1.051-1.16 1.051h-9.166l2.321-25.8Z M104.417 6.304c17.867-1.868 34.922-1.634 49.888.35.117-.467.001-.233.117-.7-13.343-3.152-28.193-5.137-43.74-5.72C50.468-1.986.928 18.445 0 45.646c-.232 7.355 3.133 14.593 9.398 21.131.348-.233.232-.233.58-.467a19.755 19.755 0 0 1-1.74-6.187C5.684 36.308 48.843 12.14 104.416 6.304ZM208.602 32.222c-.348.233-.232.116-.58.35a19.76 19.76 0 0 1 1.741 6.187c2.552 23.933-40.607 47.983-96.296 53.937-17.867 1.868-34.922 1.634-49.889-.35-.116.466 0 .233-.116.7 13.343 3.152 28.193 5.137 43.74 5.72 60.214 2.102 109.754-18.212 110.682-45.53.348-7.355-3.017-14.477-9.282-21.014Z"/>
              </svg>
            </div>
            <p className='law-data__copyright'>© {new Date().getFullYear()} ООО «Вист»</p>
            <p className='law-data__politics'>Продолжая использовать наш сайт, вы даете согласие на обработку файлов <Link to="#" className='link law-data__link'>Cookies</Link> и других пользовательских данных, в соответствии с <Link to="#" className='link law-data__link'>Политикой конфиденциальности</Link> и <Link to="#" className='link law-data__link'>Пользовательским соглашением</Link></p>
          </div>

      </div>
    </footer>
  );
}
