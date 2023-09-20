
import './App.css';
import { Route, Routes } from 'react-router-dom';
import LayoutMain from './Layout/LayoutMain';
import HomePage from './Pages/HomePage';
import OrderList from './Pages/OrderList';

function App() {
	return (
    <Routes>
    <Route path="/" element={<LayoutMain />}>
      <Route
        path="home"
        element={<HomePage />}
      />
     
    </Route>
    <Route
        path="orders"
        element={<OrderList />}
      />
  
  </Routes>
	);
}

export default App;
