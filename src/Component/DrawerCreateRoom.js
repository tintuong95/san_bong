import React, { useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Button, Col, DatePicker, Drawer, Form, Input, Row, Select, Space } from 'antd';
const { Option } = Select;
const DrawerCreateRoom = () => {
  
  const [open,setOpen]=useState(false)
  const onClose = () => {
    setOpen(false);
  };  const showDrawer = () => {
    setOpen(true);
  };
  return (
    <>
      <Button  type="default" onClick={showDrawer} icon={<PlusOutlined />}>
        Tạo mới sân bóng
      </Button>
      <Drawer
        title="Tạo mới sân bóng"
        width={520}
        onClose={onClose}
        open={open}
        bodyStyle={{
          paddingBottom: 80,
        }}
        extra={
          <Space>
            <Button onClick={onClose}>Cancel</Button>
            <Button onClick={onClose} type="primary" className='bg-slate-400'>
              Xác nhân
            </Button>
          </Space>
        }
      >
        <Form layout="vertical" hideRequiredMark>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="name"
                label="Tên sân bóng"
                rules={[
                  {
                    required: true,
                    message: 'Please enter user name',
                  },
                ]}
              >
                <Input placeholder="Please enter user name" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="name"
                label="Loại sân"
                rules={[
                  {
                    required: true,
                    message: 'Please enter user name',
                  },
                ]}
              >
                <Input placeholder="Please enter user name" />
              </Form.Item>
            </Col>
          </Row>
          
         
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item
                name="description"
                label="Ghi chú"
                rules={[
                  {
                    required: true,
                    message: 'please enter url description',
                  },
                ]}
              >
                <Input.TextArea rows={4} placeholder="please enter url description" />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Drawer>
    </>
  );
};
export default DrawerCreateRoom;