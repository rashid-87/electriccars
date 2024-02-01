
const UseCard = ({img, text, desc, img1, text1, desc1, img2, text2, desc2}) => {
  return (
    <div className="useful__wrapper">
      <div className="useful__row">
        <img className="useful__img" src={img} alt="useful-img" />
        <h4 className="useful__text">{text}</h4>
        <p className="useful__desc">{desc}</p>
      </div>
      <div className="useful__row">
        <img className="useful__img" src={img1} alt="useful-img" />
        <h4 className="useful__text">{text1}</h4>
        <p className="useful__desc">{desc1}</p>
      </div>
      <div className="useful__row">
        <img className="useful__img" src={img2} alt="useful-img" />
        <h4 className="useful__text">{text2}</h4>
        <p className="useful__desc">{desc2}</p>
      </div>
    </div>
  )
}

export default UseCard
