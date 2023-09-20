import './App.css';
import {Route, Routes, redirect} from 'react-router-dom';
import LayoutMain from './Layout/LayoutMain';
import HomePage from './Pages/HomePage';
import OrderList from './Pages/OrderList';
import OrderTable from './Pages/OrderTable';
import LoginPage from './Pages/LoginPage';
import RoomList from './Pages/RoomList';

function App() {
	return (
		<Routes>
    
			<Route path='/' element={<LayoutMain />}>
				{' '}
				<Route path='lich-su' element={<OrderTable />} />
				
				<Route path='/dang-nhap' element={<LoginPage />} />
				<Route path='/danh-sach-san' element={<RoomList />} />
        <Route path='/' element={<OrderList />} />
			</Route>
     
		</Routes>
	);
}

export default App;
