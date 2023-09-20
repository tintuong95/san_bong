import { Popover } from 'antd';
import _ from 'lodash';
import React from 'react';

import {CiFaceSmile, CiFaceFrown, CiFaceMeh} from 'react-icons/ci';

const contentOne = (
    <div>
      <p>Còn trống</p>
    
    </div>
  );

  const contentTwo = (
    <div>
      <p>Đã đặt</p>
      <p>Chưa xác nhận</p>
      <p>Nguyễn Văn A</p>
      <p>0923.234.2344</p>
    </div>
  );

  const contentThree = (
    <div>
      <p>Đã đặt</p>
      
      <p>Xác nhận xong</p>
      <p>Nguyễn Văn A</p>
      <p>0923.234.2344</p>
    </div>
  );
function OrderList() {

    const RenderList =()=>{
       const rand= _.random(1, 24)
       if(rand>0 && rand<10){
            return <Popover content={contentOne} title="Thông tin" trigger="hover">
            <div className='w-24 h-16 bg-slate-100 flex justify-center items-center'>
              <CiFaceFrown size={30} className='text-slate-400' />
          </div>
          </Popover> 
       }else if(rand>=10 && rand<18){
        return <Popover content={contentTwo} title="Thông tin" trigger="hover">
        <div className='w-24 h-16 bg-yellow-400 flex justify-center items-center'>
            <CiFaceMeh size={30} className='text-white' />
        </div></Popover>
       }else{
        return <Popover content={contentThree} title="Thông tin" trigger="hover">
        <div className='w-24 h-16 bg-green-600 flex justify-center items-center'>
            <CiFaceSmile size={30} className='text-white' />
        </div></Popover>
       }
    }
	return (
		<div className='p-10'>
			<div className='font-bold text-2xl'>LỊCH SÂN BÓNG</div>
			<p className='mb-6'>Vui lòng liên hệ đặt lịch : 0923.234.2343</p>
			<div className='flex w-full gap-1'>
				<div className='w-24 h-16 bg-slate-100 flex justify-center items-center'>
					STT
				</div>
				{_.range(1, 24).map((item, index) => (
					<div className='w-24 h-16 bg-slate-100 flex justify-center items-center'>
						{item}:30
					</div>
				))}
			</div>
			<div className='flex w-full gap-1 mt-1'>
				<div className='w-24 h-16 bg-slate-100 flex justify-center items-center'>
					Sân 1
				</div>
				{_.range(1, 24).map((item, index) => (
					<RenderList/>
				))}
			</div>
			<div className='flex w-full gap-1 mt-1'>
				<div className='w-24 h-16 bg-slate-100 flex justify-center items-center'>
					Sân 2
				</div>
				{_.range(1, 24).map((item, index) => (
					<RenderList/>
				))}
			</div>
			<div className='flex w-full gap-1 mt-1'>
				<div className='w-24 h-16 bg-slate-100 flex justify-center items-center'>
					Sân 3
				</div>
				{_.range(1, 24).map((item, index) => (
					<RenderList/>
				))}
			</div>
			<div className='flex w-full gap-1 mt-1'>
				<div className='w-24 h-16 bg-slate-100 flex justify-center items-center'>
					Sân 4
				</div>
				{_.range(1, 24).map((item, index) => (
					<RenderList/>
				))}
			</div>
			<div className='flex w-full gap-1 mt-1'>
				<div className='w-24 h-16 bg-slate-100 flex justify-center items-center'>
					Sân 5
				</div>
				{_.range(1, 24).map((item, index) => (
					<RenderList/>
				))}
			</div>
			<div className='flex w-full gap-1 mt-1'>
				<div className='w-24 h-16 bg-slate-100 flex justify-center items-center'>
					Sân 6
				</div>
				{_.range(1, 24).map((item, index) => (
					<RenderList/>
				))}
			</div>
			<div className='flex w-full gap-1 mt-1'>
				<div className='w-24 h-16 bg-slate-100 flex justify-center items-center'>
					Sân 7
				</div>
				{_.range(1, 24).map((item, index) => (
					<RenderList/>
				))}
			</div>
			<div className='flex w-full gap-1 mt-1'>
				<div className='w-24 h-16 bg-slate-100 flex justify-center items-center'>
					Sân 8
				</div>
				{_.range(1, 24).map((item, index) => (
					<RenderList/>
				))}
			</div>
			<div className='flex w-full gap-1 mt-1'>
				<div className='w-24 h-16 bg-slate-100 flex justify-center items-center'>
					Sân 9
				</div>
				{_.range(1, 24).map((item, index) => (
					<RenderList/>
				))}
			</div>
			<div className='flex w-full gap-1 mt-1'>
				<div className='w-24 h-16 bg-slate-100 flex justify-center items-center'>
					Sân 10
				</div>
				{_.range(1, 24).map((item, index) => (
					<RenderList/>
				))}
			</div>
		</div>
	);
}

export default OrderList;
