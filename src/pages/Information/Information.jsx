import { informs } from './informs.js';
import './information.scss';

const Information = () => {
  return (
    <div className='information'>
      <div className="container__card">
        <h2 className="information__title">У хэтчбeка Chevrolet Bolt появился собрат-кроссовер: Chevrolet Bolt EUV.</h2>
        <div className="information__wrapper">
            {informs.map((item, idx) => {
                return (
                    <div className="information__row" key={idx}>
                        <h4 className="information__text">{item.text}</h4>
                        <p className="information__desc">{item.desc}</p>
                        <img className='information__img' src={item.img} alt="information-images" />
                    </div>
                )
            })}
        </div>
      </div>
    </div>
  )
}

export default Information
