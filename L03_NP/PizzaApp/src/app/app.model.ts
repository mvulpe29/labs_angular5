/**
 * Created by marius on 15/03/2017.
 */
export interface IPizza {
  name: string,
  price: number,
  weight: number,
  image: string,
  ingredients: string,
  canPurchase: boolean,
  soldOut: boolean
}
