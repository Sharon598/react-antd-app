import React, { Component } from 'react';
import axios from 'axios';
import { Button, Input, Form, Icon, Row, Col, Modal, Radio } from 'antd';
import { connect } from 'react-redux';
import { increment } from '../../redux/actions/counter';
import './Register.less';

class Register extends Component {
    constructor (props) {
        super(props);
        this.state = {
          visible: false,
          userId: '',
          coupon: '',
        }
    }

    searchList = (e) => {
      e.preventDefault();
      this.props.form.validateFieldsAndScroll((err, values) => {
        if (!err) {
          console.log(values, '======params');
          const { userName, password, email } = values;

          axios.post('/api/v1.0/kafka/register', {
            userName,
            password,
            email
          })
          .then((res) => {
            const { data } = res || {};
            console.log(data, '6666666');
            if (data.success && data.data) {
              this.setState({
                visible: true,
                userId: data.data
              });
            }
          })
          .catch((error) => {
            console.log(error);
          });
        }
      });
    }

    resetFields = (e) =>{
      this.props.form.resetFields();
    }

    renderForm = () => {
      const { getFieldDecorator } = this.props.form;
      const formItemLayout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 8 }
      }; 
        return(
          <Form onSubmit={this.searchList} style={{ textAlign: 'center'}}>
            <Form.Item {...formItemLayout} label="用户名">
          {getFieldDecorator('userName', {
            rules: [{ required: true, message: 'Please input your username!' }]
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="请输入"
            />
          )}
        </Form.Item>
        <Form.Item {...formItemLayout} label="密码">
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }]
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="请输入"
            />
          )}
        </Form.Item>
        <Form.Item {...formItemLayout} label="邮箱">
          {getFieldDecorator('email', {
            rules: [{ required: true, message: 'Please input your email!' }]
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              // type="text"
              placeholder="请输入"
            />
          )}
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            提交
          </Button>
        </Form.Item>
        </Form>
        )
    }

    handleOk = e => {
      const { userId, coupon } = this.state;
      
       axios.post('/api/v1.0/kafka/coupon', {
            userId,
            coupon,
          })
          .then((res) => {
            const { data } = res || {};
            console.log(data, '777777');
            if (data.success) {
              this.setState({
                visible: false,
              });
            }
          })
          .catch(function (error) {
            console.log(error);
          });
    };
  
    handleCancel = e => {
      console.log(e);
      this.setState({
        visible: false,
      });
    };

    couponChange = (e) => {
      this.setState({
        coupon: e.target.value,
      });
    }

    render() {   
      const data = [
        {
          name: '优惠券1',
          value: '1',
        },{
          name: '优惠券2',
          value: '2',
        },{
          name: '优惠券3',
          value: '3',
        },
      ]

      const radioStyle = {
        display: 'block',
        height: '50px',
        lineHeight: '50px',
        width: '300px',
        textAlign: 'center',
        margin: '10px 60px'
      };

     return (
       <div className="register">
        <div className="title">注 &nbsp;&nbsp;&nbsp;册</div>
        {this.renderForm()}
        <Modal
          title="优惠券"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
        <Radio.Group onChange={this.couponChange} value={this.state.coupon}>
        {
          data.map(item => {
            return <Radio.Button style={radioStyle} value={item.value} key={item.value}>{item.name}</Radio.Button>
          })
        }
        </Radio.Group>
        </Modal>
       </div>
     )
    }
}

// const mapStateToProps = (state) => {
//   return {
//     counter: state.counter,
//   }
// }

// const mapDispatchToProps = (dispatch) => {
//   return {
//     increment: (val) => {
//       dispatch(increment(val))
//     }
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(FormComponents));
export default Form.create()(Register);

