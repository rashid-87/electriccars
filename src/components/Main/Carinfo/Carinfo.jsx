import { useState } from "react";
import Modal from "../../Modal/Modal";
import Form from "../../Form/Form";
import {info} from "./info.js"
import './carinfo.scss';

const Carinfo = () => {
  const [modal, setModal] = useState(false);

  if (modal) {
    document.body.classList.add("modal");
  } else {
    document.body.classList.remove("modal");
  }
  return (
    <div className='carinfo'>
      <div className="container">
        <h3 className="carinfo__title">Электромобили в Липецке </h3>
        <div className="carinfo__wrapper">
          {info.map((item, idx) => {
            return (
              <div className="carinfo__card" key={idx}>
                <img className='carinfo__img' src={item.img} alt="carindo-images" />
                <h4 className="carinfo__subtitle">{item.title}</h4>
                <div className="carinfo__row">
                  <div className="carinfo__wpapp">
                    <img src={item.svg} alt="carinfo-svg" />
                    <h5 className="carinfo__text">{item.test}</h5>
                  </div>
                  <p className="carinfo__desc">{item.desc}</p>
                </div>
                <div className="carinfo__row">
                  <div className="carinfo__wpapp">
                    <img src={item.svg1} alt="carinfo-svg" />
                    <h5 className="carinfo__text">{item.test1}</h5>
                  </div>
                  <p className="carinfo__desc">{item.desc1}</p>
                </div>
                <div className="carinfo__row">
                  <div className="carinfo__wpapp">
                    <img src={item.svg2} alt="carinfo-svg" />
                    <h5 className="carinfo__text">{item.test2}</h5>
                  </div>
                  <p className="carinfo__desc">{item.desc2}</p>
                </div>
                <div className="carinfo__row">
                  <div className="carinfo__wpapp">
                    <img src={item.svg3} alt="carinfo-svg" />
                    <h5 className="carinfo__text">{item.test3}</h5>
                  </div>
                  <p className="carinfo__desc">{item.desc3}</p>
                </div>
                <div className="carinfo__row">
                  <div className="carinfo__wpapp">
                    <img src={item.svg4} alt="carinfo-svg" />
                    <h5 className="carinfo__text">{item.test4}</h5>
                  </div>
                  <p className="carinfo__desc">{item.desc4}</p>
                </div>
                <button className="carinfo__btn" type="button" onClick={() => setModal(true)}> {" "}{item.btn}{" "} </button>
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
  )
}

export default Carinfo
