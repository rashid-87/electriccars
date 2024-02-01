const Card = ({img, text, desc, img1, text1, desc1, img2, text2, desc2, img3, text3, desc3, img4, text4, desc4, img5, text5, desc5}) => {
  return (
    <div className="abvantages__wrapper">
      <div className="abvantages__row">
        <img src={img} alt="abvantages-svg" />
        <div className="abvantages__wrapp">
            <h4 className="abvantages__text">{text}</h4>
            <p className="abvantages__desc">{desc}</p>
        </div>
      </div>
      <div className="abvantages__row">
        <img src={img1} alt="abvantages-svg" />
        <div className="abvantages__wrapp">
            <h4 className="abvantages__text">{text1}</h4>
            <p className="abvantages__desc">{desc1}</p>
        </div>
      </div>
      <div className="abvantages__row">
        <img src={img2} alt="abvantages-svg" />
        <div className="abvantages__wrapp">
            <h4 className="abvantages__text">{text2}</h4>
            <p className="abvantages__desc">{desc2}</p>
        </div>
      </div>
      <div className="abvantages__row">
        <img src={img3} alt="abvantages-svg" />
        <div className="abvantages__wrapp">
            <h4 className="abvantages__text">{text3}</h4>
            <p className="abvantages__desc">{desc3}</p>
        </div>
      </div>
      <div className="abvantages__row">
        <img src={img4} alt="abvantages-svg" />
        <div className="abvantages__wrapp">
            <h4 className="abvantages__text">{text4}</h4>
            <p className="abvantages__desc">{desc4}</p>
        </div>
      </div>
      <div className="abvantages__row">
        <img className="abvantages__svg" src={img5} alt="abvantages-svg" />
        <div className="abvantages__wrapp">
            <h4 className="abvantages__text">{text5}</h4>
            <p className="abvantages__desc">{desc5}</p>
        </div>
      </div>
    </div>
  )
}

export default Card
