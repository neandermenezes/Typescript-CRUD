interface IOrder {
  id: number,
  userId: number,
  products?: Array<number>,
}

export interface IOrderCreate {
  order: {
    userId: number,
    products: Array<number>
  }
}

export default IOrder;
