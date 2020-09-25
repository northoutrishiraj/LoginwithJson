import React, { Component } from 'react';
import './Dashboard.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

class Dashboard extends Component {
    constructor() {
        super();
        this.state = {
            registers: null
        }
    }

    componentDidMount() {
        axios
            .get('http://localhost:5000/registers')
            .then((result) => {
                console.warn(result)
                this.setState({ registers: result.data })
            })

    }

    render() {
        return (
            <div className="basetemp-container2">
                <h4>Dashboard</h4>
                {
                    this.state.registers ?
                        this.state.registers.map((item) =>
                            <div key={item.id}><p>{item.name}</p></div>
                        )
                        :
                        <div>No items found.</div>
                }
                <Link to='/'><Button className="addbtn button1" variant="primary">Logout</Button></Link>
            </div>
        );
    }
}

export default Dashboard;