export interface ICountState {
   id: string,
   count: number,
   loading: false,
   increaseCount: () => void,
   decreaseCount: () => void,
   resetCount: () => void
}