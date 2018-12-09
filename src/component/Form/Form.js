import React, { Component } from 'react';
import { Button, Input, Form, Select, Row, Col } from 'antd';
import { connect } from 'react-redux';
import { increment } from '../../redux/actions/counter';


const FormItem = Form.Item;
const Option = Select.Option;

class FormComponents extends Component {
    constructor (props) {
        super(props)
    }

    searchList = (e) => {
      e.preventDefault();
      this.props.form.validateFieldsAndScroll((err, values) => {
        if (!err) {
          console.log(values, '======params');
          this.props.increment(values);
        }
      });
    }

    resetFields = (e) =>{
      this.props.form.resetFields();
      this.searchList(e);
    }

    render() {   
      const { getFieldDecorator } = this.props.form;
      const formItemLayout = {
          labelCol: {
            span: 6,
          },
          wrapperCol: {
              span: 10,
          },
        };  
        return(
          <Form onSubmit={this.searchList}>
            <Row gutter={24}>
              <Col span={8}>
              <FormItem
              {...formItemLayout}
                label="提交人"
              >
                {getFieldDecorator('person')(
                  <Input placeholder="请输入" />
                )}
              </FormItem>
              </Col>
              <Col span={8}>
              <FormItem
              {...formItemLayout}
                label="单号"
              >
                {getFieldDecorator('num')(
                  <Input placeholder="请输入" />
                )}
              </FormItem>
              </Col>
              <Col span={8}>
              <FormItem
              {...formItemLayout}
                label="紧急度"
              >
                {getFieldDecorator('du')(
                  <Input placeholder="请输入" />
                )}
              </FormItem>
              </Col>
            </Row>
            <Row gutter={24}>
              <Col span={8}>
                <FormItem
                {...formItemLayout}
                  label="审批状态"
                >
                  {getFieldDecorator('status')(
                    <Input placeholder="请输入" />
                  )}
                </FormItem>
              </Col>
              <Col span={8}>
                <FormItem
                  {...formItemLayout}
                    label="信息位置"
                  >
                  {getFieldDecorator('address')(
                    <Select
                      showSearch
                      placeholder="选择提示"
                    >
                      <Option value="a">a</Option>
                      <Option value="s">s</Option>
                      <Option value="c">c</Option>
                    </Select>,
                  )}
                </FormItem>
              </Col>
              <Col span={8}>
                <FormItem  style={{ textAlign: 'center'}}>
                  <Button type="primary" htmlType="submit">搜索</Button>
                  <Button onClick={(e) => this.resetFields(e)} style={{ marginLeft: '20px'}}>重置</Button>
                </FormItem>
              </Col>
            </Row>          
        </Form>
        )
    }
}

const mapStateToProps = (state) => {
  return {
    counter: state.counter,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    increment: (val) => {
      dispatch(increment(val))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(FormComponents));

