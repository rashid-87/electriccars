import AsideCard from './AsideCard';
import {group, group1, group2} from "../../img"
import './aside.scss';

const Aside = () => {
  return (
    <div className='aside'>
      <div className="container">
        <AsideCard title="Электромобили в Липецке в наличии" subtitle="Узнайте, как использовать самый экологичный автомобиль в повседневной жизни" btn="Заказать" button="Заказать авто" img={group} text="Приобщись к сообществу любителей современных экологичных  автомобилей" img1={group1} desc="Полезная информация об электромобилях" img2={group2} info="Развитая сеть зарядных устройств"/>
      </div>
    </div>
  )
}

export default Aside
