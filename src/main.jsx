import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Root from './Components/Root/index.jsx';
import Home from './Pages/Home';
import ProductDetails from './Components/ProductDetails';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
        <Route path="" element={<Root />}>
          <Route path="" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetails />} />
        </Route>
    <Route path="*" element={<h1 className='text-center'>Sorry, the page you are looking for does not exist.</h1>} />
    </Route>




  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>


)
