import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AppLayout from './components/app-layout';
import Home from './pages/Home';
import './App.css';
import Context from './context/context';

const router = createBrowserRouter([{
  element: <AppLayout />,
  children: [
    {
      path: '/',
      element: <Home />
    },
    {}
  ]}])

function App() {
  return (
    <Context>
      <RouterProvider router={router} />
    </Context>
  )
}

export default App;
