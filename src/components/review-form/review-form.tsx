import { useReducer } from "react";
import { INITIAL_FORM, reviewReducer } from "../reducers/reducers";
import { ReviewFormTypes } from "../../interfaces/review";
import styles from "./review-form.module.css";

export default function ReviewForm() {
  const [form, dispatch] = useReducer(reviewReducer, INITIAL_FORM);
  const { name, text } = form;

  return (
    <form>
      <div className={styles.formField}>
        <label>Имя:</label>
        <input
          className={styles.formInput}
          value={name}
          onChange={(event) => {
            dispatch({
              type: ReviewFormTypes.setNameAction,
              payload: event.target.value,
            });
          }}
        />
      </div>
      <div className={styles.formField}>
        <label>Текст отзыва:</label>
        <input
          className={styles.formInput}
          value={text}
          onChange={(event) =>
            dispatch({
              type: ReviewFormTypes.setReviewText,
              payload: event.target.value,
            })
          }
        />
      </div>
      <button
        className={styles.formSubmit}
        type="submit"
        onClick={() =>
          dispatch({
            type: ReviewFormTypes.clearFormAction,
            payload: 0,
          })
        }
      >
        Очистить
      </button>
    </form>
  );
}
