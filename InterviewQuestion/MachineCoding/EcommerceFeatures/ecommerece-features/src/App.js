import { createBrowserRouter, RouterProvider } from 'react-router';
import AppLayout from './Component/AppLayout';
import Home from './Component/Home';
import './App.css';

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Home />
      }]
  }
])

function App() {
  return (
   <div className='font-bold'>
    <RouterProvider router={router} />
   </div>
  );
}

export default App;
