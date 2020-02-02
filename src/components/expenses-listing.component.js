import React, { Component } from "react";
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import ExpenseTableRow from './ExpenseTableRow';


export default class ExpenseList extends Component {

  constructor(props) {
    super(props)
    this.state = {
      expenses: []
    };
  }

  componentDidMount() {
    axios.get('https://laravel-react-expense-manager.herokuapp.com/api/expenses/')
      .then(res => {
        this.setState({
          expenses: res.data
        });
      })
      .catch((error) => {
        console.log(error);
      })
  }

  DataTable() {
    return this.state.expenses.map((res, i) => {
      return <ExpenseTableRow obj={res} key={i} />;
    });
  }


  render() {
    return (<div className="table-wrapper">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Amount</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {this.DataTable()}
        </tbody>
      </Table>
    </div>);
  }
}