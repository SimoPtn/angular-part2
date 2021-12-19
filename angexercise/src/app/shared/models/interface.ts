export interface Beer {
    id: number,
    type: Type,
    name: string,
    price: number
}

export enum Type {
  SMALL = 'Small',
  MEDIUM = 'Medium'
}
