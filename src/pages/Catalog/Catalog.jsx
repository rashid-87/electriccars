import { useState } from "react";
import Modal from "../../components/Modal/Modal";
import Form from "../../components/Form/Form";
import { catal } from "./catal.js";
import "./catalog.scss";

const Catalog = () => {
  const [modal, setModal] = useState(false);

  if (modal) {
    document.body.classList.add("modal");
  } else {
    document.body.classList.remove("modal");
  }
  return (
    <div className="catalog">
      <div className="container">
        <h2 className="catalog__title">Каталог электромобилей</h2>
         <div className="catalog__wrapper">
          {catal.map((item, idx) => {
            return (
              <div className="catalog__card" key={idx}>
                <img className='catalog__img' src={item.img} alt="catalog-images" />
                <h4 className="catalog__subtitle">{item.title}</h4>
                <div className="catalog__row">
                  <div className="catalog__wpapp">
                    <img src={item.svg} alt="catalog-svg" />
                    <h5 className="catalog__text">{item.test}</h5>
                  </div>
                  <p className="catalog__desc">{item.desc}</p>
                </div>
                <div className="catalog__row">
                  <div className="catalog__wpapp">
                    <img src={item.svg1} alt="catalog-svg" />
                    <h5 className="catalog__text">{item.test1}</h5>
                  </div>
                  <p className="catalog__desc">{item.desc1}</p>
                </div>
                <div className="catalog__row">
                  <div className="catalog__wpapp">
                    <img src={item.svg2} alt="catalog-svg" />
                    <h5 className="catalog__text">{item.test2}</h5>
                  </div>
                  <p className="catalog__desc">{item.desc2}</p>
                </div>
                <div className="catalog__row">
                  <div className="catalog__wpapp">
                    <img src={item.svg3} alt="catalog-svg" />
                    <h5 className="catalog__text">{item.test3}</h5>
                  </div>
                  <p className="catalog__desc">{item.desc3}</p>
                </div>
                <div className="catalog__row">
                  <div className="catalog__wpapp">
                    <img src={item.svg4} alt="catalog-svg" />
                    <h5 className="catalog__text">{item.test4}</h5>
                  </div>
                  <p className="catalog__desc">{item.desc4}</p>
                </div>
                <button className="catalog__btn" type="button" onClick={() => setModal(true)}> {" "}{item.btn}{" "} </button>
              </div>
            )
          })}
        </div>
        <Modal isOpen={modal} onClose={() => setModal(false)}>
          <h2 className="modal__form">Доставим авто</h2>
          <Form />
      </Modal> 
      </div>
    </div>
  );
};

export default Catalog;
