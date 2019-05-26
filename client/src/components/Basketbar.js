import React, { Component } from 'react';
import { Menu, Icon, MenuHeader, Label, Button } from 'semantic-ui-react';
import '../styles/App.css';
import { connect } from "react-redux";
import { purchaseItem } from '../store/actions/postActions';

class Basketbar extends Component {
	renderItems() {
		const { basket, itemlist } = this.props.basket;
		return (
			<Menu vertical>
				<MenuHeader className='head' as='h5'>Basket</MenuHeader>
				{basket.map(key => {
					return (
						<Menu.Item key={key}>
						<div className='mini'>
							<Label size='medium' as='a'>
								{itemlist[key - 1].name}
								<Label.Detail className='minilabel'>{itemlist[key - 1].price}</Label.Detail>
							</Label>
							<Button icon id={itemlist[key - 1].id} onClick={
									e => {
										this.props.purchaseItem(
											basket.filter(el => el !== +(e.currentTarget.id))
										);
									}
								} size='mini'>
								<Icon className='butt' name='delete'></Icon>
							</Button>
						</div>
						</Menu.Item>
					)
				})}
				<Menu.Item>
					<Button color='purple'>Submit purchase</Button>
				</Menu.Item>
			</Menu>	
		)
	}

	render() {
		return (
			<div className='basket'>
				{this.renderItems()}
			</div> 
		);
	}
}

export default connect(
    state => ({
		basket: state.active,
		itemlist: state.active
	}),
    { purchaseItem }
)(Basketbar);