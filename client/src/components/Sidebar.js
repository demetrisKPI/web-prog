import React, { Component } from 'react';
import { Input, Button, Menu, Icon, Checkbox } from 'semantic-ui-react';
import '../styles/App.css';
import { connect } from "react-redux";
import { fetchFilterList, fetchSearch } from "../store/actions/postActions";

class Sidebar extends Component {
    state = {
        clothes: false,
        household: false,
        devices: false
    }
    componentDidUpdate() {
        this.props.fetchFilterList(this.state);
    }
    handleChangeClothes = e => {
        this.state.clothes ? this.setState({ clothes: false }) : this.setState({ clothes: true });
    }
    handleChangeHousehold = (e, { value }) => {
        this.state.household ? this.setState({ household: false }) : this.setState({ household: true });
    }
    handleChangeDevices = (e, { value }) => {
        this.state.devices ? this.setState({ devices: false }) : this.setState({ devices: true });
    }
    handleChange = (e, { value }) => {
        this.props.fetchSearch(value);
    }
    render() {
        return ( 
            <div className='entire'>
                <Menu vertical>
                    <Menu.Item horizontal='true' className ='search'>
                        <Input placeholder='Search...' onChange={this.handleChange} action={
                            <Button icon color='purple'>
                                <Icon name='search' />
                            </Button>
                        }></Input>
                    </Menu.Item>
                        <Menu.Header className='head' as='h5'>Filters</Menu.Header>
                        <Menu.Item>
                            <Checkbox className='check' onChange={this.handleChangeClothes} toggle label='Cloths'/>
                        </Menu.Item>
                        <Menu.Item>
                            <Checkbox className='check' onChange={this.handleChangeDevices} toggle label='Devices'/>
                        </Menu.Item>
                        <Menu.Item>
                            <Checkbox className='check' onChange={this.handleChangeHousehold} toggle label='Household'/>
                        </Menu.Item>
                </Menu>
            </div> 
        );
    }
}
 
export default connect(
    null,
    { fetchFilterList, fetchSearch }
)(Sidebar);