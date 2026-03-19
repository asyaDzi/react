import { ReviewFormTypes } from "../../interfaces/review";

export const INITIAL_FORM = {
  name: "",
  text: "",
};

export const reviewReducer = (
  state: any,
  action: { type: any; payload: any },
) => {
  const { type, payload } = action;

  switch (type) {
    case ReviewFormTypes.setNameAction:
      return { ...INITIAL_FORM, name: payload };
    case ReviewFormTypes.setReviewText:
      return { ...state, text: payload };
    case ReviewFormTypes.clearFormAction:
    default:
      return INITIAL_FORM;
  }
};
