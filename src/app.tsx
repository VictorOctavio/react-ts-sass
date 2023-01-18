import { useContext } from 'react'
import countContext from './context/CountContext'

const App = () => {

   const { count, increaseCount, decreaseCount, resetCount } = useContext(countContext);

   return (
      <div style={{ height: '100vh', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
         <h6 style={{ color: 'white', fontSize: '16px', fontWeight: '300', paddingBottom: '40px' }}>Project React (Vite) with Typescript and Sass</h6>
         <h1 style={{ color: 'white', fontSize: '50px' }}>{count}</h1>
         <div style={{ display: 'flex', gap: '10px' }}>
            <button className='btn' onClick={() => decreaseCount()}>-</button>
            <button className='btn' onClick={() => resetCount()}>reset</button>
            <button className='btn' onClick={() => increaseCount()}>+</button>
         </div>
         <h6 style={{ color: 'white', fontSize: '20px', fontWeight: '300', marginTop: '50px' }}>ByOct1</h6>
      </div>
   )
}

export default App