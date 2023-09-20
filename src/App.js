import './App.css';
import {Route, Routes} from 'react-router-dom';
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
				<Route path='/dat-san' element={<OrderList />} />
				<Route path='/dang-nhap' element={<LoginPage />} />
				<Route path='/danh-sach-san' element={<RoomList />} />
			</Route>
		</Routes>
	);
}

export default App;
