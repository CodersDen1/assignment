import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import  {store , persistor } from './store/store.js'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import AuthPage from './pages/AuthPage.jsx'
import ProtectedRoutes from './routes/ProtectedRoutes.jsx'
import DashBoard from './pages/DashBoard.jsx'

import Cookies from 'js-cookie'
import { PersistGate } from 'redux-persist/integration/react'
import Products from './pages/Products.jsx'

const isLoggedIn = Cookies.get('is_logged_in') 
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
    <Route path='/' element={isLoggedIn?<AuthPage/>:<DashBoard />} />
     <Route path='/api' element={<Layout />} >
     
       <Route element={<ProtectedRoutes/>} >
            <Route path='dashboard' element={<DashBoard />} />
            <Route path='products' element={<Products/>}/>
        </Route>
     </Route> 

    </Route>
    
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
   <PersistGate loading={null} persistor={persistor}>
          <RouterProvider router={router}/>
   </PersistGate>
  </Provider>
)
