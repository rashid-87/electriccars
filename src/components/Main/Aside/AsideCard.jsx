import { useState } from "react";
import Modal from "../../Modal/Modal";
import Form from "../../Form/Form";

const AsideCard = ({title, subtitle, btn, button, img, img1, img2, text, desc, info}) => {
  const [modal, setModal] = useState(false);

  if (modal) {
    document.body.classList.add("modal");
  } else {
    document.body.classList.remove("modal");
  }
  return (
    <>
      <div className="aside__wrapper">
        <h1 className="aside__title">{title}</h1>
        <h4 className="aside__subtitle">{subtitle}</h4>
        <div className="aside__wrapp">
          <button className="aside__btn" type="button" onClick={() => setModal(true)}> {" "}{btn}{" "} </button>
          <button className="aside__button" type="button" onClick={() => setModal(true)}> {" "}{button}{" "} </button>
        </div>
      </div>
      <div className="aside__rows">
        <div className="aside__row">
            <img src={img} alt="aside-svg" />
            <p className="aside__text">{text}</p>
        </div>
        <div className="aside__row">
            <img src={img1} alt="aside-svg" />
            <p className="aside__text">{desc}</p>
        </div>
        <div className="aside__row">
            <img className="aside__img" src={img2} alt="aside-svg" />
            <p className="aside__text">{info}</p>
        </div>
      </div>
      <Modal isOpen={modal} onClose={() => setModal(false)}>
          <h2 className="modal__form">Доставим авто</h2>
          <Form />
      </Modal>
    </>
  )
}

export default AsideCard
