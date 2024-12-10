export interface Product {
  name: string;
  description: string;
  price: number;
  stock: number;
  status: string;
  categoryName: string;
}

export interface Report {
  id: number;
  name: string;
  total: number;
  status: string;
  date: string;
}
