export type ReviewSubmitForm = {
  name: string;
  text: string;
  rait: number;
};

export const ReviewFormTypes = {
  setNameAction: "SET_NAME_ACTION",
  setReviewText: "SET_REVIEW_TEXT",
  setRaiting: "SET_RAITING",
  clearFormAction: "CLEAR_FORM_ACTION",
};

export interface ReviewRaitConst {
  min: number;
  max: number;
}
