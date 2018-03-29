import React, { Component } from 'react';
import {Link } from 'react-router-dom';
import ModalContactUs from '../ModalContactUs';
// import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import './index.css';


export default class Nav extends Component {

    render() {
        return (
            <div className= "container">
            <nav className="nav">
                    <Link className="navbar-brand" to="/">
                        {/* <img src={HelloWorld} id="pandabologo" width="60" height="60" class="d-inline-block align-center" alt=""/> */}
                        Pandahug
               </Link>
            <ul className="nav justify-content-end">



               <li className="nav-item">
            <Link to="/search"> <h5 className="nav-link">  School Finder   </h5></Link>
            </li>
            <li className="nav-item">
            <Link to="/store"> <h5 className="nav-link">  Services    </h5></Link>
            </li>
            <li className="nav-item">
            <Link to="/aboutus"> <h5 className="nav-link">  About    </h5></Link>
            </li>
            {/* <li className="nav-item">
            <Link to="/contactus"> <h5 className="nav-link">  Contact Us    </h5></Link>
            </li> */}
            </ul>

                    <ModalContactUs contactForm={this.props.contactForm} />


                    {/* <Form inline>
                        <FormGroup>
                            <Label for="exampleEmail" hidden>Email</Label>
                            <Input type="email" name="email" id="exampleEmail" placeholder="Email" />
                        </FormGroup>
                        {' '}
                        <FormGroup>
                            <Label for="examplePassword" hidden>Password</Label>
                            <Input type="password" name="password" id="examplePassword" placeholder="Password" />
                        </FormGroup>
                        {' '}
                        <Button>Submit</Button>
                    </Form>
                     */}


            </nav>



            </div>



        )
    }
}
