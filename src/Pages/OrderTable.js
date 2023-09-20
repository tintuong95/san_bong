import React from 'react';
import {Avatar, QRCode, Space, Table, Tag} from 'antd';
import _ from 'lodash';
import { UserOutlined } from '@ant-design/icons';
const data = [
	{
		key: '1',
		name: 'Nguyen Van A',
		birthdate: '10-10-1990',
        nameOrder:"Sân 10",
        time:"10:30 - 11:30",
		phone: '0923.234.234',
		address: 'Phu Yen',
		status: _.random(1, 3),
	},
	{
		key: '2',
		name: 'Nguyen Van A',
		birthdate: '10-10-1990',
        nameOrder:"Sân 10",
        time:"10:30 - 11:30",
		phone: '0923.234.234',
		address: 'Phu Yen',
		status: _.random(1, 3),
	},
	{
		key: '3',
		name: 'Nguyen Van A',
		birthdate: '10-10-1990',
        nameOrder:"Sân 10",
        time:"10:30 - 11:30",
		phone: '0923.234.234',
		address: 'Phu Yen',
		status: _.random(1, 3),
	},
	{
		key: '4',
		name: 'Nguyen Van A',
		birthdate: '10-10-1990',
        nameOrder:"Sân 10",
        time:"10:30 - 11:30",
		phone: '0923.234.234',
		address: 'Phu Yen',
		status: _.random(1, 3),
	},
	{
		key: '5',
		name: 'Nguyen Van A',
		birthdate: '10-10-1990',
        nameOrder:"Sân 10",
        time:"10:30 - 11:30",
		phone: '0923.234.234',
		address: 'Phu Yen',
		status: _.random(1, 3),
	},
	{
		key: '6',
		name: 'Nguyen Van A',
		birthdate: '10-10-1990',
        nameOrder:"Sân 10",
        time:"10:30 - 11:30",
		phone: '0923.234.234',
		address: 'Phu Yen',
		status: _.random(1, 3),
	},
	{
		key: '7',
		name: 'Nguyen Van A',
		birthdate: '10-10-1990',
        nameOrder:"Sân 10",
        time:"10:30 - 11:30",
		phone: '0923.234.234',
		address: 'Phu Yen',
		status: _.random(1, 3),
	},
	{
		key: '8',
		name: 'Nguyen Van A',
		birthdate: '10-10-1990',
        nameOrder:"Sân 10",
        time:"10:30 - 11:30",
		phone: '0923.234.234',
		address: 'Phu Yen',
		status: _.random(1, 3),
	},
	{
		key: '9',
		name: 'Nguyen Van A',
		birthdate: '10-10-1990',
        nameOrder:"Sân 10",
        time:"10:30 - 11:30",
		phone: '0923.234.234',
		address: 'Phu Yen',
		status: _.random(1, 3),
	},
	{
		key: '10',
		name: 'Nguyen Van A',
		birthdate: '10-10-1990',
        nameOrder:"Sân 10",
        time:"10:30 - 11:30",
		phone: '0923.234.234',
		address: 'Phu Yen',
		status: _.random(1, 3),
	},
	{
		key: '11',
		name: 'Nguyen Van A',
		birthdate: '10-10-1990',
        nameOrder:"Sân 10",
        time:"10:30 - 11:30",
		phone: '0923.234.234',
		address: 'Phu Yen',
		status: _.random(1, 3),
	},
];
const OrderTable = () => {
	const RenderStatus = ({status}) => {
		if (status == 1) {
			return <Tag color='#f50'>Chưa xác nhận</Tag>;
		} else if (status == 2) {
			return <Tag color='#2db7f5'>Đã xác nhận</Tag>;
		} else {
			return <Tag color='#87d068'>Đã hoàn thành</Tag>;
		}
	};
    const columns = [
        {
            title: '#',
            dataIndex: 'key',
            key: 'key',
            render: (text) =>  <QRCode size={70} value={text || '-'} />,
        },
        {
            title: 'Họ và tên',
            dataIndex: 'name',
            key: 'name',
            render: (text) => <div className='flex items-center gap-2'>
                <Avatar icon={<UserOutlined />} /> <a>{text}</a>,
            </div>
        },
        {
            title: 'Ngày sinh',
            dataIndex: 'birthdate',
            key: 'birthdate',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'Số điện thoại',
            dataIndex: 'phone',
            key: 'phone',
        },
        {
            title: 'Địa chỉ',
            dataIndex: 'address',
            key: 'address',
            
        },
        {
            title: 'Lịch sân',
            dataIndex: 'order',
            key: 'order',
            render: (_,text) => <div>{text?.nameOrder} </div>,
        },
        {
            title: 'Thời gian',
            dataIndex: 'time',
            key: 'time',
            render: (_,text) => <div> {text?.time}</div>,
        },
        {
            title: 'Trạng thái',
            key: 'status',
            dataIndex: 'status',
            render: (text,) => <RenderStatus status={text}/>,
        },
        {
            title: 'Thao tác',
            key: 'action',
            render: (_, record) => (
                <Space size='middle'>
                    <a className='text-blue-600'>Cập nhật</a>
                    <a className='text-red-600'>Xóa bỏ</a>
                </Space>
            ),
        },
    ];
	return (
		<div className='px-10 mt-5'>
			
			<Table columns={columns} dataSource={data} />
		</div>
	);
};
export default OrderTable;
