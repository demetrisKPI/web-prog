import React, { Component } from 'react';
import { Icon, Header, Button, Menu } from 'semantic-ui-react';
import '../styles/App.css';
import { connect } from 'react-redux';
import { changeActiveItem } from '../store/actions/postActions';

class Navbar extends Component {
    state = {
        logged: false
    }

    handleItemClick = (e, { content }) => {
        this.setState({ activeItem: content });
        this.props.changeActiveItem(content);
    }

    handleLogIn = () => {
        this.setState({ logged: true });
    }

    renderUser() {
        if (!this.state.logged) return (<Button color='purple' content='Log In' onClick={this.handleLogIn}/>);
        return (<Button color='violet' icon='user' content='account'/>)
    }

    render() {
        const { activeItem } = this.props;
        
        return ( 
            <div className='nav'>
                <Menu horizontal='true' className="logo">
                    <Menu.Item icon>
                        <Icon className='iconka' circular color='purple' name='cart' size='big'/>
                    </Menu.Item>
                    <Menu.Item header>
                        <Header color='purple'>
                            DEMETRIS
                            <Header.Subheader>Best online shop</Header.Subheader>
                        </Header>
                    </Menu.Item>
                    <Menu.Item>
                        <Menu fluid>
                            <Menu.Item as='a'
                                active={activeItem === 'Store'} 
                                onClick={this.handleItemClick}
                                content='Store'/>
                            <Menu.Item as='a'
                                active={activeItem === 'Post'} 
                                onClick={this.handleItemClick}
                                content='Post' />
                        </Menu>
                    </Menu.Item>
                    <Menu.Item position='right'>
                        <div>{this.renderUser()}</div>
                    </Menu.Item>
                </Menu>
            </div>
        );
    }
}
 
export default connect(
    state => ({
      activeItem: state.active.activeItem
    }),
    { changeActiveItem }
)(Navbar);