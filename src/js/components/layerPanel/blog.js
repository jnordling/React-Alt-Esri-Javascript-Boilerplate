import React from 'react'

export default class Blog extends React.Component {

	constructor (props) {
		super(props)
	}

	componentDidMount(){

	}

	render(){
		return(
			<div className="row">
				<div className="col s6 m6">
				    <div className="card light-blue darken-4">
				        <div className="card-content white-text">
				            <span className="card-title">Blog Title</span>
				            <p>Blog Text</p>
				         </div>
			            <div className="card-action grey lighten-3">
			              <a href="#">This is a link</a>
			              <a href="#">This is a link</a>
			            </div>
				    </div>
				</div>
			</div>
          
		)
	}
}
