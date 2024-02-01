import { useState } from "react";
import { Link } from 'react-router-dom';
import Modal from "../Modal/Modal";
import Form from "../Form/Form";
import { logo } from "../img";
import './footer.scss';

const Footer = () => {
    const [modal, setModal] = useState(false);

    if (modal) {
      document.body.classList.add("modal");
    } else {
      document.body.classList.remove("modal");
    }
  return (
    <div className='footer'>
      <div className="container">
       <nav className="footer__nav">
          <ul className="footer__menu">
            <li className="footer__item">
              <Link className="footer__link" to="/">
                Главная cтраница
              </Link>
            </li>
            <li className="footer__item">
              <Link className="footer__link" to="/catalog">
                Каталог автомобилей
              </Link>
            </li>
            <li className="footer__item">
              <Link className="footer__link" to="/charging">
                Сеть зарядных станций
              </Link>
            </li>
            <li className="footer__item">
              <Link className="footer__link" to="/accordion">
                Вопрос-ответ
              </Link>
            </li>
            <li className="footer__item">
              <Link className="footer__link" to="/information">
                Полезная информация
              </Link>
            </li>
          </ul>
        </nav>
        <div className="footer__wrapper">
          <img className="footer__img" src={logo} alt="footer-logo" />
          <button className="footer__btn" type="button" onClick={() => setModal(true)}> {" "} Заказать{" "} </button>
        </div>
        <Modal isOpen={modal} onClose={() => setModal(false)}>
          <h2 className="modal__form">Доставим авто</h2>
          <Form />
        </Modal>
      </div>
    </div>
  )
}

export default Footer
