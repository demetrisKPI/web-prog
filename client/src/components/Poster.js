import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';
import 'semantic-ui-css';
import '../styles/App.css';
import { connect } from 'react-redux';
import { postNewItem, changeActiveItem } from '../store/actions/postActions';

class PostForm extends Component {
    state = {
        category: '',
        name: '',
        source: '',
        price: '',
        description: ''
    };

    handleChange = (e, { value }) => {
        this.setState({ category: value });
    }
    handleName = (e, { value }) => {
        this.setState({ name: value });
    }
    handlePrice = (e, { value }) => {
        this.setState({ price: value + ' $' });
    }
    handleImg = (e, { value }) => {
        this.setState({ source: value });
    }
    handleDescription= (e, { value }) => {
        this.setState({ description: value });
    }
    handleSubmit = () => {
        const post = {
            name: this.state.name,
            source: this.state.source,
            price: this.state.price,
            category: this.state.category,
            description: this.state.description
        }
        this.props.postNewItem(post);
        this.props.changeActiveItem('Store');
    }
    render() {
        const { category } = this.state;
        return (
            <div className='poster'>
                <Form>
                    <Form.Group className='pad' widths='equal'>
                        <Form.Input required label='Name'
                            onChange={this.handleName} placeholder='Name of a product goes here...'/>
                        <Form.Input required 
                            type='number' 
                            label='Price'
                            onChange={this.handlePrice}/>
                        <Form.Input required label='Image' 
                            onChange={this.handleImg} placeholder='Image URL goes here...'/>
                    </Form.Group>
                    <Form.Group required className='pad' inline>
                        <label>Category</label>
                        <Form.Radio
                            label='Household'
                            value='household'
                            checked={category === 'household'}
                            onChange={this.handleChange}
                        />
                        <Form.Radio
                            label='Clothes'
                            value='clothes'
                            checked={category === 'clothes'}
                            onChange={this.handleChange}
                        />
                        <Form.Radio
                            label='Devices'
                            value='devices'
                            checked={category === 'devices'}
                            onChange={this.handleChange}
                        />
                    </Form.Group>
                    <Form.TextArea className='pad' label='Description' onChange={this.handleDescription}
                        placeholder='Add all the detailes here...'/>
                    <Form.Checkbox className='pad' required label='I agree to the Terms and Conditions' />
                    <Form.Button type="button" className='pad' onClick={this.handleSubmit} color='purple'>Submit</Form.Button>
                </Form>
            </div>
        );
    }
}
 
export default connect(
    null,
    { postNewItem, changeActiveItem }
)(PostForm);