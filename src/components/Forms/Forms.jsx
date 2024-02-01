import { useForm } from "react-hook-form";

const Forms = () => {
  const {register, formState: {errors}, handleSubmit, reset} = useForm({mode: "onBlur"});

  const onSubmit = (formDate) => {
    console.log(formDate);
    reset()
  }

  return (
    <form className="charging__post" onSubmit={handleSubmit(onSubmit)}>
        <h3 className="charging__subtitle">Где открыть следующую станцию?</h3>
      <label>
        <input className="charging__name" {...register("firstAge", {
            required: "Поле не должо быть пустым",
              minLength: {
              value: 3,
              message: "Минимум три буквы",
            }
          })} placeholder="имя" />
      </label>
      <div>
        {errors?.firstAge && (
          <span className="charging__red">{errors?.firstAge.message || "Error!"}</span>
        )}
        </div>
      <label>
        <input className="charging__name" {...register("test", {
              required: "Введите номер телефона",
              minLength: {
              value: 12,
              message: "Минимум 12 номер",
            }
          })} type="tel" placeholder="Телефон" />
      </label>
      <div>
        {errors?.test && (
          <span className="charging__red">{errors?.test.message || "Error!"}</span>
        )}
        </div>
      <label>
        <textarea className="charging__name charging__active" {...register("first", {
            required: "Поле не должо быть пустым",
              minLength: {
              value: 3,
              message: "Минимум три буквы",
            }
          })} placeholder="ваш вопрос" />
      </label>
      <div>
        {errors?.first && (
          <span className="charging__red">{errors?.first.message || "Error!"}</span>
        )}
        </div>
      <button className="charging__btn" type="submit">Отправить</button>
    </form>
  )
}

export default Forms