import React from 'react';
import {mapActions} from 'components/map/actions';
import {mapStore} from 'components/map/store';
import {map as mapConfig} from 'config';

export default class Map extends React.Component{
	constructor(props){
		super(props);
		this.state = mapStore.getState();
		mapStore.listen(this.storeUpdate.bind(this));
	}
	storeUpdate(){
		this.setState(mapStore.getState());
	}
	componentDidMount(){
		mapActions.initialize();
	}
	componentDidUpdate(){
	}
	render() {
		return (
			<div>
				<div id="map"></div>
				<div id="map_controls">
					<button onClick={mapActions.changeMapSize.bind(this, mapConfig.sizes.large)}>Big</button>
					<button onClick={mapActions.changeMapSize.bind(this, mapConfig.sizes.medium)}>med</button>
					<button onClick={mapActions.changeMapSize.bind(this, mapConfig.sizes.small)}>small</button>
				</div>
			</div>
		);
	}
}
