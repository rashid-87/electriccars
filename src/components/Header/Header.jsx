import './header.scss';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='header'>
      <div className="container">
      <nav className="header__nav">
          <ul className="header__menu">
            <li className="header__item">
              <Link className="header__link" to="/">
                Главная cтраница
              </Link>
            </li>
            <li className="header__item">
              <Link className="header__link" to="/catalog">
                Каталог автомобилей
              </Link>
            </li>
            <li className="header__item">
              <Link className="header__link" to="/charging">
                Сеть зарядных станций
              </Link>
            </li>
            <li className="header__item">
              <Link className="header__link" to="/accordion">
                Вопрос-ответ
              </Link>
            </li>
            <li className="header__item">
              <Link className="header__link" to="/information">
                Полезная информация
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Header
