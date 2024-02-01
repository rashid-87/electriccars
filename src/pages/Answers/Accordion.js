import Answers from "./Answers"

const fagList = [
    {
        q: "Электромобиль – это очень сложная и полностью отличающаяся от обычного авто штука?",
        a: "Электромобили сконструированы и испытаны в соответствии со всеми действующими стандартами безопасности. Проверенные годами сертификации и тесты подтверждают: защита водителя и пассажиров будет максимальной. В новых испытаниях Model X получил наивысший балл - заявляют представители компании Tesla. Euro NCAP поставила кроссоверу 37.5 баллов из 38 возможных за защиту взрослых пассажиров. Отдельно комиссия отметила высокую эффективность систем экстренного торможения."
    },
    {
        q: "Электромобили проигрывают обычным авто с ДВС?",
        a: "Электромобили сконструированы и испытаны в соответствии со всеми действующими стандартами безопасности. Проверенные годами сертификации и тесты подтверждают: защита водителя и пассажиров будет максимальной. В новых испытаниях Model X получил наивысший балл - заявляют представители компании Tesla. Euro NCAP поставила кроссоверу 37.5 баллов из 38 возможных за защиту взрослых пассажиров. Отдельно комиссия отметила высокую эффективность систем экстренного торможения"
    },
    {
        q: "Электромобили имеют повышенную опасность?",
        a: "Электромобили сконструированы и испытаны в соответствии со всеми действующими стандартами безопасности. Проверенные годами сертификации и тесты подтверждают: защита водителя и пассажиров будет максимальной. В новых испытаниях Model X получил наивысший балл - заявляют представители компании Tesla. Euro NCAP поставила кроссоверу 37.5 баллов из 38 возможных за защиту взрослых пассажиров. Отдельно комиссия отметила высокую эффективность систем экстренного торможения"
    },
    {
        q: "Чтобы управлять электромобилем, необходимо водительское удостоверение со специальной категорией?",
        a: "Электромобили сконструированы и испытаны в соответствии со всеми действующими стандартами безопасности. Проверенные годами сертификации и тесты подтверждают: защита водителя и пассажиров будет максимальной. В новых испытаниях Model X получил наивысший балл - заявляют представители компании Tesla. Euro NCAP поставила кроссоверу 37.5 баллов из 38 возможных за защиту взрослых пассажиров. Отдельно комиссия отметила высокую эффективность систем экстренного торможения"
    },
    {
        q: "Как узнать, сколько электроэнергии потребляет электромобиль при его зарядке и насколько дорого он обходится в эксплуатации? ",
        a: "Электромобили сконструированы и испытаны в соответствии со всеми действующими стандартами безопасности. Проверенные годами сертификации и тесты подтверждают: защита водителя и пассажиров будет максимальной. В новых испытаниях Model X получил наивысший балл - заявляют представители компании Tesla. Euro NCAP поставила кроссоверу 37.5 баллов из 38 возможных за защиту взрослых пассажиров. Отдельно комиссия отметила высокую эффективность систем экстренного торможения"
    },

]

const Accordion = () => {
  return (
    <>
      <Answers fagList={fagList}/>
    </>
  )
}

export default Accordion