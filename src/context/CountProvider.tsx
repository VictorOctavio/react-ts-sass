import { useReducer } from 'react'
import CountContext from './CountContext'
import { ICountState } from '../interfaces/ICount'
import { CountReducer } from './CountReducer'

const INITIAL_STATE: ICountState = {
   id: '',
   count: 0,
   loading: false,
   increaseCount: function (): void { },
   decreaseCount: function (): void { },
   resetCount: function (): void { }
}

interface IProps {
   children: JSX.Element | JSX.Element[]
}

export const CountProvider = ({ children }: IProps) => {

   // Reducer
   const [countState, dispatch] = useReducer(CountReducer, INITIAL_STATE)

   // Actions
   function increaseCount() {
      dispatch({
         type: 'INCREASECOUNT',
         payload: countState.count + 1
      })

   }

   function decreaseCount() {
      dispatch({
         type: 'DECREASECOUNT',
         payload: countState.count - 1
      })
   }

   function resetCount() {
      dispatch({
         type: 'RESETCOUNT',
         payload: 0
      })
   }

   return (
      <CountContext.Provider value={{ ...countState, increaseCount, decreaseCount, resetCount }}>
         {children}
      </CountContext.Provider>
   )
}
