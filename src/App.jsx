import { Outlet } from 'react-router-dom'
import Header from './components/Header'

function App() {
    return (
        <div className='font-style '>  
            <Header/>  
            <main>  
                <Outlet/>  
            </main>  
        </div>  
    )
}

export default App