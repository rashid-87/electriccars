import UseCard from './UseCard';
import {use, use1, use2} from "../../img";
import './useful.scss';

const Useful = () => {
  return (
    <div className='useful'>
      <div className="container">
        <h2 className="useful__title">Полезные материалы</h2>
        <UseCard img={use} text="Chevrolet Bolt 2021: только хорошие новости! Обновился, снизил цену, обзавелся новой версией и получил автопилот второго уровня." desc="В Беларуси Chevrolet Bolt набирает популярность, ведь он является одним из самых доступных подержанных электрокаров с большим пробегом на одной зарядке. А на американском рынке уже появилась обновленная версия. Причем не одна: обновленный Chevrolet Bolt EV обзавелся “братом” в виде кроссоверной версии Chevrolet Bolt EUV." img1={use1} text1="Обновленные Model S и Model X: все модификации, характеристики, цены." desc1="Лифтбек Tesla Model S выпускается с 2012 года - и все это время он оставался неизменным. Но сегодня компания просто ошарашила поклонников новостями о кардинальном обновлении модельного ряда. Представлены новые модификации Tesla Model S и Tesla Model X, а также “горячие” версии Tesla Model S Plaid и Tesla Model S Plaid+." img2={use2} text2="Что мы знаем об электрическом Ford Mustang?" desc2="Ходят слухи, что Ford Mustang Mach-E выйдет сразу же после окончания карантина. В сегодняшнем выпуске мы расскажем о всём, что известно о новом Мустанге от компании Ford."/>
      </div>
    </div>
  )
}

export default Useful
