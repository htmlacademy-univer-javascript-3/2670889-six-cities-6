export type Review = {
  id: string;
  user: {
    name: string;
    avatar: string;
  };
  rating: number;
  text: string;
  date: string;
};
