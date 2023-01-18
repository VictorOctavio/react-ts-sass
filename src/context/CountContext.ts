import { createContext } from 'react'
import { ICountState } from '../interfaces/ICount'

const countContext = createContext({} as ICountState)

export default countContext