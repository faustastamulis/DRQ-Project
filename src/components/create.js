import React from 'react';
import axios from 'axios';

export class Create extends React.Component {

    constructor() {
        super();

        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeshoeName = this.onChangeShoeName.bind(this);
        this.onChangesize = this.onChangeSize.bind(this);
        this.onChangephoto = this.onChangePhoto.bind(this);

        this.state = {
            shoeName: '',
            size: '',
            photo: ''
        }
    }

    onChangeShoeName(e) {
        this.setState({
            shoeName: e.target.value
        });
    }

    onChangeSize(e) {
        this.setState({
            size: e.target.value
        });
    }
    onChangePhoto(e) {
        this.setState({
            photo: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();
        alert("Shoe Name: " + this.state.shoeName + " "
            + this.state.size + " " +
            this.state.photo);

         const newShoe = {
            shoeName: this.state.shoeName,
            size: this.state.size,
            photo: this.state.photo
         }   
        axios.post('http://localhost:4000/api/shoes',newShoe )
        .then((res)=>{
            console.log(res);
        })
        .catch((err)=>{
            console.log(err);
        });
    }

    render() {
        return (
            <div className='App'>
                <h1>Edit Page</h1>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Add Shoe Name: </label>
                        <input type='text'
                            className='form-control'
                            value={this.state.shoeName}
                            onChange={this.onChangeshoeName}></input>
                    </div>
                    <div className="form-group">
                        <label>Add Shoe Size: </label>
                        <textarea type='text'
                            className='form-control'
                            value={this.state.size}
                            onChange={this.onChangesize}></textarea>
                    </div>
                    <div className='form-group'>
                        <label>Add photo of the Shoe: </label>
                        <input type='text'
                            className='form-control'
                            value={this.state.Poster}
                            onChange={this.onChangephoto}>
                        </input>
                    </div>


                    <div className="form-group">
                        <input type='submit'
                            value='Add Shoe'
                            className='btn btn-primary'></input>
                    </div>
                </form>
            </div>
        );
    }
}