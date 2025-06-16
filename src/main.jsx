import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Service from './pages/Service.jsx'
import Contact from './pages/Contact.jsx'
import ViewProduct from './pages/ViewProduct.jsx'

// import { ProductProvide } from './Store/ProductContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  
  <BrowserRouter>
    <Routes>
       <Route  path = '/' element = {<App />}>
            <Route path = '/' element = {<Home />} />
            <Route path = '/about' element = {<About />} />
            <Route path = '/service' element = {<Service />} />
            <Route path = '/contact' element = {<Contact />} />
            <Route path = '/view' element = {<ViewProduct />} />
       
            {/* BestDeal */}
            <Route path = '/view' element = {<ViewProduct />} />
       </Route>

       <Route path = '/*' element = {<h2>Not Found</h2>}/>
    </Routes>
  </BrowserRouter>

  </StrictMode>,
)
