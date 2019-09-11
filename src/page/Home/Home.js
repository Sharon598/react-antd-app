import React, { Component } from 'react';
import axios from 'axios';
import FormComponent from '../../component/Form/Form';
import Register from '../../component/Register/Register';
import TableForm from '../../component/Table/Table';
import './Home.less';

class Home extends Component {
    constructor (props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div >
                <Register/>
               {/* <FormComponent />
               <TableForm /> */}
            </div>
        )
    }
}

export default Home;
