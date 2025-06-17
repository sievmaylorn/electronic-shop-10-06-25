import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div  className='font-style'>
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
