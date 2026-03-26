export type Restaurant = {
  id: string;
  name: string;
  menu: Array<Menu>;
  reviews: Array<Review>;
};

export type NormalizedRestaurant = {
  id: string;
  name: string;
  menu: Array<string>;
  reviews: Array<string>;
};

export type Review = {
  id: string;
  user: string;
  text: string;
  rating: number;
};

export type NormalizedReview = {
  id: string;
  userId: string;
  text: string;
  rating: number;
};

export type Menu = {
  id: string;
  name: string;
  price: number;
  ingredients: Array<string>;
};
