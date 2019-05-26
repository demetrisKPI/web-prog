import React, { Component } from 'react';
import { Card, Image, Button } from 'semantic-ui-react';
import 'semantic-ui-css';
import '../styles/App.css';
import { connect } from 'react-redux';
import { fetchMerchList, purchaseItem } from '../store/actions/postActions';

class Merch extends Component {
	componentDidMount() {
		this.props.fetchMerchList();
	}
	handleClick = e => {
		let tmp = this.props.basket;
		if (e.currentTarget.id) tmp.push(+(e.currentTarget.id));
		this.props.purchaseItem(tmp);
		e.currentTarget.disabled = true;
	}
	renderItemList() {
		const { filterlist, search, itemlist } = this.props;

		return (
			<div className='list'>
				{itemlist ? itemlist.data.map(key => {
					if (Array(key.name).filter(el => (el.toLowerCase().indexOf(search.toLowerCase()) > -1)).length) {
						if ((!filterlist.clothes &&
							!filterlist.devices &&
							!filterlist.household) ||
							filterlist[key.category]) {
							return (
								<div key={key.id} className='items'>
									<Card>
										<Image as='img' src={key.source} className='image' />
										<Card.Content>
											<Card.Header content={key.name} />
											<Card.Meta content={key.price} />
											<Card.Description content={key.description} />
										</Card.Content>
										<Card.Content className='purchase' extra>
											<Button color='violet' id={key.id} icon='cart' content='Purchase' onClick={this.handleClick} />
										</Card.Content>
									</Card>
								</div>
							);
						}
					}
				}) : ''}
			</div>
		);
	}
	render() {
		return (
			<div className='merchlist'>
				{this.renderItemList()}
			</div>
		);
	}
}

export default connect(
	state => ({
		search: state.active.search,
		itemlist: state.active.itemlist.data,
		filterlist: state.active.filterlist,
		basket: state.active.basket
	}),
	{ fetchMerchList, purchaseItem }
)(Merch);