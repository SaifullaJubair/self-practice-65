import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AddUser from './Components/AddUser/AddUser';
import Home from './Components/Home/Home';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home></Home>,
      loader: () => fetch('http://localhost:5000/users')
    },
    {
      path: '/adduser',
      element: <AddUser></AddUser>
    }
  ])

  return (
    <div className="App">
      <RouterProvider router={router}>  </RouterProvider>
    </div>
  );
}

export default App;
