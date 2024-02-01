import { logo } from "../img";
import { useState } from "react";
import Modal from "../Modal/Modal";
import Form from "../Form/Form";
import "./page.scss";

const Page = () => {
  const [modal, setModal] = useState(false);

  if (modal) {
    document.body.classList.add("modal");
  } else {
    document.body.classList.remove("modal");
  }
  return (
    <div className="page">
      <div className="container">
        <div className="page__wrapper">
          <img className="page__img" src={logo} alt="page-logo" />
          <button className="page__btn" type="button" onClick={() => setModal(true)}> {" "} Заказать{" "} </button>
        </div>
        <Modal isOpen={modal} onClose={() => setModal(false)}>
          <h2 className="modal__form">Доставим авто</h2>
          <Form />
        </Modal>
      </div>
    </div>
  );
};

export default Page;
