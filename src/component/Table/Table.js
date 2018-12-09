import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Table } from 'antd';
import { increment } from '../../redux/actions/counter';

const columns = [{
    title: '提交人',
    dataIndex: 'person',
  }, {
    title: '单号',
    dataIndex: 'num',
  }, {
    title: '紧急度',
    dataIndex: 'du',
  }, {
    title: '审批状态',
    dataIndex: 'status',
  }, {
    title: '位置信息',
    dataIndex: 'address',
  }];

// 模拟表格的全部数据
const data = [{
    key: '0',
    person: 's',
    num: '1',
    du: '1',
    status: 's',
    address: 's',
  }, {
    key: '1',
    person: 'xdw',
    num: '32',
    du: '29',
    status: 'finished',
    address: 'x',
  }, {
    key: '2',
    person: 'John Brown',
    num: '67',
    du: '62',
    status: 'start',
    address: 'alibaba',
  }, {
    key: '3',
    person: 'John Brown',
    num: '89',
    du: '50',
    status: 'finished',
    address: 'alibaba',
  }, {
    key: '4',
    person: 'John Brown',
    num: '70',
    du: '50',
    status: 'finished',
    address: 'alibaba',
  }];
  
class TableForm extends Component {
    constructor () {
        super()
        this.state = {
          tablelist: data,
        }
    }

    componentWillReceiveProps(newProps){
      const { counter } = newProps || {}
      this.filterList(counter)
    }

    // 正常情况应该把搜索条件作为参数，向后端请求数据，后端返回数据渲染table就可以的，但目前没有接口，没有后端可以返回数据，所以在这里我写了一些过滤条件搜索过滤数据做展示；
    filterList = (val) => {
      const { person, num, du, status, address } = val || {}  
      console.log(val, '=========val')   
      if (person && num && du && status && address) {
        const list = data.filter(item => item.person === person && item.num === num && item.du === du && item.status === status && item.address === address)
        this.setState({
          tablelist: list,
        })
      } else if (!person && num && du && status && address) {
        const list = data.filter(item => item.num === num && item.du === du && item.status === status && item.address === address)
        this.setState({
          tablelist: list,
        })
      } else if (!person && !num && du && status && address) {
        const list = data.filter(item => item.du === du && item.status === status && item.address === address)
        this.setState({
          tablelist: list,
        })
      } else if (!person && !num && !du && status && address) {
        const list = data.filter(item => item.status === status && item.address === address)
        this.setState({
          tablelist: list,
        })
      } else if (!person && !num && !du && !status && address) {
        const list = data.filter(item => item.address === address)
        this.setState({
          tablelist: list,
        })
      } else if (person && !num && !du && !status && !address) {
        const list = data.filter(item => item.person === person)
        this.setState({
          tablelist: list,
        })
      } else if (person && num && !du && !status && !address) {
        const list = data.filter(item => item.person === person && item.num === num)
        this.setState({
          tablelist: list,
        })
      } else if (person && num && du && !status && !address) {
        const list = data.filter(item => item.person === person && item.num === num && item.du === du)
        this.setState({
          tablelist: list,
        })
      } else if (person && num && du && status && !address) {
        const list = data.filter(item => item.person === person && item.num === num && item.du === du && item.status === status)
        this.setState({
          tablelist: list,
        })
      } else if (num) {
        const list = data.filter(item => item.num === num)
        this.setState({
          tablelist: list,
        })
      } else if (du) {
        const list = data.filter(item => item.du === du)
        this.setState({
          tablelist: list,
        })
      } else if (status) {
        const list = data.filter(item => item.status === status)
        this.setState({
          tablelist: list,
        })
      } else if (address) {
        const list = data.filter(item => item.address === address)
        this.setState({
          tablelist: list,
        })
      } else {
        this.setState({
          tablelist: data,
        })
      }
    }

    render() {
        return(
            <div>
                <Table columns={columns} dataSource={this.state.tablelist} size="middle" />
            </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(TableForm);

