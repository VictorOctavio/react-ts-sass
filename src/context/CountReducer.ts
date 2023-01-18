import { ICountState } from "../interfaces/ICount";

type CountAction =
   | { type: 'INCREASECOUNT', payload: number }
   | { type: 'DECREASECOUNT', payload: number }
   | { type: 'RESETCOUNT', payload: number }

export const CountReducer = (state: ICountState, action: CountAction): ICountState => {
   switch (action.type) {
      case "INCREASECOUNT": return { ...state, count: action.payload }
      case "DECREASECOUNT": return { ...state, count: action.payload }
      case "RESETCOUNT": return { ...state, count: action.payload }
      default:
         return state
   }
}