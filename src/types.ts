export interface MenuItem {
  id: number;
  name: string;
  category: string;
  price: number;
  veg: boolean;
  popular: boolean;
  rating: number;
  desc: string;
  ingredients: string;
  calories: string;
  image: string;
  preparationTime?: string;
  chefSpecial?: boolean;
}

export interface CartItem {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
  veg: boolean;
  qty: number;
}

export interface ReservationData {
  fullName: string;
  phone: string;
  date: string;
  time: string;
  guests: string;
  occasion: string;
  email: string;
  specialRequests: string;
}
