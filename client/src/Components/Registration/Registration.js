import React, { Component } from 'react';
import './Registration.css';
import axios from 'axios';
import { Button, Form, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

class Registration extends Component {

	constructor(props) {
		super(props)

		this.state = {
			name: '',
            email: '',
            password: '',
		}
	}

	changeHandler = e => {
		this.setState({ [e.target.name]: e.target.value })
	}

	submitHandler = e => {
		e.preventDefault()
		console.log(this.state)
		axios
			.post('http://localhost:5000/registers', this.state)
			.then(response => {
				console.log(response)
			})
			.catch(error => {
				console.log(error)
            })
            // window.location.reload();
            this.setState({	name: '', email: '', password: '' })
    }


	render() {
		const { name, email, password } = this.state
		return (
			<div className="basetemp-container">
				<div className="col-md-6 col-md-offset-2">
                    <Card style={{ width: '45rem' }} bg="light">
                    <h5><Card.Header>Registration</Card.Header></h5>
                        <Card.Body>
                            <Form onSubmit={this.submitHandler}>
                            <Form.Group controlId="formBasicTitle">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" name="name" value={name} onChange={this.changeHandler} required />
                            </Form.Group>
                            <Form.Group controlId="formBasicStart">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email"  name="email" value={email} onChange={this.changeHandler} required />
                            </Form.Group>
                            <Form.Group controlId="formBasicPswrd">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" name="password" value={password} onChange={this.changeHandler} required />
                            </Form.Group>
                            <Button className="addbtn button1" variant="primary" type="submit">Submit</Button>
                            <Link to='/'><Button className="addbtn button1" variant="primary">Login</Button></Link>
                            </Form>
                            
                        </Card.Body>
                    </Card>
                </div>
			</div>
		)
	}
}

export default Registration;