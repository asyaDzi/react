export type Restorant = {
  id: string;
  name: string;
  menu: Array<Menu>;
  reviews: Array<Review>;
};

export type Review = {
  id: string;
  user: string;
  text: string;
  rating: number;
};

export type Menu = {
  id: string;
  name: string;
  price: number;
  ingredients: Array<string>;
};
