import {useForm} from "react-hook-form";
import "./form.scss";

const Form = () => {
  const {register, formState: {errors}, handleSubmit, reset} = useForm({mode: "onBlur"});

  const onSubmit = (formDate) => {
    console.log(formDate);
    reset()
  }

  return (
    <div className="form">
      <form className="form__post" onSubmit={handleSubmit(onSubmit)}>
        <label>
          <input className="form__name" {...register("firstAge", {
            required: "Поле не должо быть пустым",
              minLength: {
              value: 3,
              message: "Минимум три буквы",
            }
          })} placeholder="имя" />
        </label>
        <div>
        {errors?.firstAge && (
          <span className="form__red">{errors?.firstAge.message || "Error!"}</span>
        )}
        </div>
        <label>
          <input className="form__name" {...register("test", {
              required: "Введите номер телефона",
              minLength: {
              value: 12,
              message: "Минимум 12 номер",
            }
          })} type="tel" placeholder="Телефон" />
        </label>
        <div>
        {errors?.test && (
          <span className="form__red">{errors?.test.message || "Error!"}</span>
        )}
        </div>
        <button className="form__btn" type="submit">
          Заказать
        </button>
      </form>
    </div>
  );
};

export default Form;
