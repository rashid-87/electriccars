import "./answers.scss";
import { useState } from 'react';
import { BsArrowDownShort } from "react-icons/bs";

const Answers = ({ fagList }) => {
  const [open, setOpen] = useState(false)

  const clicHendler = (id) => {
    if (id === open) setOpen(false)
    else setOpen(id)
  }
  
  return (
    <div className="answers">
      <div className="container">
        <h2 className="answers__title">Ответы на часто задаваемые вопросы</h2>
        <ul className="answers__wrapper">
          {fagList.map((item, id) => {
            return (
              <li className="answers__item" key={id}>
                <button className={`answers__btn ${id === open && "answers__activ"}`} onClick={() => clicHendler(id)}>{item.q}
                 <BsArrowDownShort className={`answers__icons ${id === open && "answers__active"}`}/>
                </button>
                <div className={`answers__collap ${id === open && "answers__open"}`}>
                 <div className="answers__text">{item.a}</div>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  );
};

export default Answers;
