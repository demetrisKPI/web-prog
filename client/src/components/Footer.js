import React, { Component } from 'react';
import { Container, Header, Divider } from 'semantic-ui-react';
import 'semantic-ui-css';
import '../styles/App.css';

class Footer extends Component {
	render() { 
		return ( 
			<div className='footer'>
				<Divider clearing />
				<Container fluid>
					<Header icon='umbrella' color='purple'
						className='descript' as='h3' content='Design by Demetris' floated='right'/>
				</Container>
			</div>
		);
	}
}
 
export default Footer;