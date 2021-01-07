  
import React from 'react';
import { Read } from './read.js';

//using map function to split the books array
export class Createlist extends React.Component{

    render(){
        
        return this.props.shoes.map( (shoes)=>{
            return <Read shoes={shoes} reloadMethod={this.props.reloadMethod}></Read>
        })
    }
}