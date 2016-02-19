/*eslint-disable */
import {mapActions} from 'components/map/actions';
import alt from 'js/alt';
import Map from "esri/map"

class MapStore {
	constructor () {
		this.map = {};
		this.bindListeners({
			initialize: mapActions.initialize,
			changeMapSize: mapActions.changeMapSize
		});
	}

	initialize(){
		var map = new Map("map", {
	    center: [-118, 34.5],
	    zoom: 8,
	    basemap: "topo"
	  });
		this.map = map;
	}

	changeMapSize(size) {
		this.mapSize = size;
		document.getElementById('map').style.height = this.mapSize;
	}

	getMap(){
		return this.map;
	}
	setMap(map){
		this.map = map;
	}
}

export const mapStore = alt.createStore(MapStore, 'MapStore');
