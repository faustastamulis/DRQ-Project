import React from 'react';
import { Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export class Read extends React.Component{

    //constructor used to create card object and super class
    //asking user to enter the following to upload what they have read
    //binding
    constructor(props){
        //use card we need super class to invoke parent class
        super(props);

        this.RemoveShoe = this.RemoveShoe.bind(this);

        //fields we are taking in
        this.state ={
            shoeName:'',
            size:'',
            photo:''
        }
    }
     
    //remove shoes from library
    RemoveShoe(e){
        e.preventDefault();
        console.log("Remove: " + this.props.shoes._id);
        axios.delete("http://localhost:4000/api/shoes/" + this.props.shoes._id)
        .then(()=>{
            this.props.reloadMethod();
        })
        .catch();
    }
    //displaying shoes using Card
    render(){
        return(
            <div> 
                <br></br>
            <div>
                <Card className="text-center">
                    <Card.Header>{this.props.shoeName}</Card.Header>
                    <Card.Body>
                        <Card.Text>
                            {this.props.photo}
                        </Card.Text>
                        <Card.Title>{this.props.size}</Card.Title>
                    </Card.Body>
                    <Button variant="dark" onClick={this.RemoveShoe}>Remove Shoe</Button>
                </Card>
            </div>
            </div>
        );
    }
}