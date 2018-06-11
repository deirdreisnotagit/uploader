import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './index.css';


const proptypes = {
}

export default class Button extends Component {
	render(){
		return(
			<div className={'center'}>
				<div className={'overlay'}>
					<Image cloudName="rcstraus" publicId={this.props.publicId} width="300" crop="scale"/>
				</div>
				<input className={'smlBtn'} />
			</div>
		);
	}
}

Button.proptypes = proptypes;

