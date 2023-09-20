import React, { useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Button, Col, DatePicker, Drawer, Form, Input, Row, Select, Space } from 'antd';
const { Option } = Select;
const DrawerBase = ({open,setOpen}) => {
  
  
  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
      
      <Drawer
        title="Đặt sân bóng"
        width={720}
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
                label="Tên người đặt"
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
                label="Số điện thoại"
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
            <Col span={12}>
              <Form.Item
                name="owner"
                label="Sân bóng"
                rules={[
                  {
                    required: true,
                    message: 'Sân 1',
                  },
                ]}
              >
                <Select placeholder="Please select an owner">
                  <Option value="xiao">Sân 1</Option>
                  <Option value="mao">Sân 2</Option>
                  <Option value="xiao">Sân 3</Option>
                  <Option value="mao">Sân 4</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="type"
                label="Thời gian"
                rules={[
                  {
                    required: true,
                    message: 'Please choose the type',
                  },
                ]}
              >
                <Input placeholder="10:30 - 11:30" />
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
export default DrawerBase;