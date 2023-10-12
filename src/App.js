import { RouterProvider,  createHashRouter } from 'react-router-dom';
import './App.scss';
import Layout from './Pages/Layout';
import Home from './Pages/Home';
import About from './Pages/About';
import Cart from './Pages/Cart';
import Contact from './Pages/Contact';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Notfound from './Pages/Notfound';
import Search from './Pages/Search';
import CartContextProvide from './Context/CartStore';

function App() {
  const routers = createHashRouter([
    {
      path: '', element: <Layout />, children: [
        { index: true, element: <Home /> },
        { path: 'about', element: <About /> },
        { path: 'contact', element: <Contact /> },
        { path: 'cart', element: <Cart /> },
        { path: 'login', element: <Login /> },
        { path: 'register', element: <Register /> },
        { path: 'search', element: <Search /> },
        { path: '*', element: <Notfound /> },
      ]
    }
  ])
  return <CartContextProvide>
    <RouterProvider router={routers}>

    </RouterProvider>
  </CartContextProvide>

}

export default App;
