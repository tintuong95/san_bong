import React from 'react';
import { QRCode, Space, Table, Tag } from 'antd';
const columns = [
  {
    title: '#',
    dataIndex: 'key',
    key: 'key',
    render: (text) =>  <QRCode size={70} value={text || '-'} />,
  },
  {
    title: 'Tên sân',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Người tạo',
    dataIndex: 'creator',
    key: 'creator',
  },
  {
    title: 'Ngày tạo',
    dataIndex: 'created_at',
    key: 'created_at',
  },
  {
    title: 'Trạng thái',
    dataIndex: 'status',
    key: 'status',
    render: (_, record) => <Tag color='#87d068'>Sẵn sàng</Tag>,
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
const data = [
  {
    key: '1',
    name: 'Sân 1',
    creator: 'Nguyen Van A',
    created_at:"10:00 12-10-2022",
    status: 1,
   
  },
  {
    key: '2',
    name: 'Sân 1',
    creator: 'Nguyen Van A',
    created_at:"10:00 12-10-2022",
    status: 1,
   
  },
  {
    key: '3',
    name: 'Sân 1',
    creator: 'Nguyen Van A',
    created_at:"10:00 12-10-2022",
    status: 1,
   
  },
  {
    key: '4',
    name: 'Sân 1',
    creator: 'Nguyen Van A',
    created_at:"10:00 12-10-2022",
    status: 1,
   
  },
  {
    key: '5',
    name: 'Sân 1',
    creator: 'Nguyen Van A',
    created_at:"10:00 12-10-2022",
    status: 1,
   
  },
  {
    key: '6',
    name: 'Sân 1',
    creator: 'Nguyen Van A',
    created_at:"10:00 12-10-2022",
    status: 1,
   
  },
  {
    key: '7',
    name: 'Sân 1',
    creator: 'Nguyen Van A',
    created_at:"10:00 12-10-2022",
    status: 1,
   
  },
  {
    key: '8',
    name: 'Sân 1',
    creator: 'Nguyen Van A',
    created_at:"10:00 12-10-2022",
    status: 1,
   
  },
  {
    key: '9',
    name: 'Sân 1',
    creator: 'Nguyen Van A',
    created_at:"10:00 12-10-2022",
    status: 1,
   
  },
  {
    key: '10',
    name: 'Sân 1',
    creator: 'Nguyen Van A',
    created_at:"10:00 12-10-2022",
    status: 1,
   
  },
  {
    key: '11',
    name: 'Sân 1',
    creator: 'Nguyen Van A',
    created_at:"10:00 12-10-2022",
    status: 1,
   
  },
];
const RoomList = () => {
    return (
		<div className='px-10 mt-5'>
			
			<Table columns={columns} dataSource={data} />
		</div>
	);
};
export default RoomList;