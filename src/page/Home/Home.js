import React, { Component } from 'react';
import FormComponent from '../../component/Form/Form';
import TableForm from '../../component/Table/Table';

class Home extends Component {
    constructor () {
        super()
    }

    render() {
        return (
            <div>
               <FormComponent />
               <TableForm />
            </div>
        )
    }
}

export default Home;
