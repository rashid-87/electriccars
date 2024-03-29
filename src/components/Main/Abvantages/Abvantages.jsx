import {eco, eco1, eco2, eco3, eco4, eco5} from "../../img"
import Card from "./Card";
import './abvantages.scss';

const Abvantages = () => {
  return (
    <div className='abvantages'>
      <div className="container">
        <h2 className="abvantages__title">Преимущества электротранспорта</h2>
        <Card img={eco} text="Экологичность" desc="Экологически чистый транспорт не загрязняет окружающую среду лишним шумом, выхлопными газами и другими вредными выбросами. Большое количество электромобилей благоприятно сказывается  на экологии больших городов  с насыщенным трафиком." img1={eco1} text1="Эргономичность" desc1="Благодаря отсутствию ДВС,в салоне электрического авто больше места. Также, зачастую, электромобили имеют два багажника: спереди  и сзади, что является довольно весомым аргументом в пользу электромобилей, как семейных авто." img2={eco2} text2="Безопасность" desc2="Чаще всего, в электромобилях используются инновационные технологии, и отрасль безопасноти не исключение. Помимо этого, благодаря отсутсвию топливного бака и, как следствие, сгораемого топлива в автомобиле, уменьшается риск возгораний и пожаров." img3={eco3} text3="Топливное преимущество" desc3="Электричество гораздо дешевле привычного нам, сгораемого, топлива. Также, электродвигатель признается более надежным и беспроблемным, по сравнению с ДВС." img4={eco4} text4="Простой сервис" desc4="Зелёные автомобили не требуют замены расходников, характерных для бензиновых и дизельных авто. Благодаря этому плановое ТО для авто на электротяге довольно простое: диагностика ходовой, батареи и программные обновления." img5={eco5} text5="Выгода использования" desc5="Наличие электрического, и другого зелёного транспорта, позволяет сэкономить на топливе, запчастях и тех.обслуживании. Также, государство предлагает некоторые льготы и послабления для владельцев таких авто."/>
      </div>
    </div>
  )
}

export default Abvantages
