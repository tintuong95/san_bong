import React, {useState} from 'react';
import {
	DesktopOutlined,
	FileOutlined,
	PieChartOutlined,
	TeamOutlined,
	UserOutlined,
} from '@ant-design/icons';
import {Breadcrumb, Button, Layout, Menu, theme} from 'antd';
import {Link, Outlet} from 'react-router-dom';
import DrawerCreateRoom from '../Component/DrawerCreateRoom';

const LayoutMain = () => {
	return (
		<div>
			<div className='px-10  pt-6 flex justify-between items-center border-b shadow-sm'>
				<div>
					<div className='font-bold text-2xl'>LỊCH SÂN BÓNG</div>
					<p className='mb-6'>Vui lòng liên hệ đặt lịch : 0923.234.2343</p>
				</div>
				<div className='flex items-center gap-3'>
					<Link to={'/'}>
						<Button>Đặt sân</Button>
					</Link>
					<Link to={'/lich-su'}>
						<Button>Lịch sử đặt sân</Button>
					</Link>
					<Link to={'/danh-sach-san'}>
						<Button>Danh sách sân</Button>
					</Link>
					<DrawerCreateRoom/>
					<Link to={'/dang-nhap'}>
						<Button type='primary' danger>
							Đăng nhập
						</Button>
					</Link>
				</div>
			</div>
			<div className='mt-6'> <Outlet /></div>
		</div>
	);
};
export default LayoutMain;
