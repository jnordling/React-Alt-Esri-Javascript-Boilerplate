import React from 'react';

export default class Header extends React.Component {

	constructor (props) {
		super(props);
	}

	componentDidMount(){
		$('.button-collapse').sideNav();
	}

	render(){
		return (
			<nav>
				<div className="nav-wrapper light-blue accent-4">
						<a href="#!" className="brand-logo"></a>
						<a href="#" data-activates="mobile-demo" className="button-collapse"><i className="material-icons">menu</i></a>
						<ul className="right hide-on-med-and-down">
							<li><a href="#"></a></li>
							<li><a href="#"></a></li>
							<li><a href="#"></a></li>
							<li><a href="#"></a></li>
						</ul>
						<ul className="side-nav" id="mobile-demo">
							<li><a href="#"></a></li>
							<li><a href="#"></a></li>
							<li><a href="#"></a></li>
							<li><a href="#"></a></li>
						</ul>
					</div>
			</nav>

		);
	}
}
