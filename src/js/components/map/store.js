/*eslint-disable */
import {mapActions} from 'components/map/mapActions';
import alt from 'js/alt';
import {map as mapConfig} from 'config';
import L from 'leaflet';

class MapStore {
	constructor () {
		this.map = {};
		this.mapSize = mapConfig.sizes.default;
		this.bindListeners({
			initialize: mapActions.initialize,
			changeMapSize: mapActions.changeMapSize
		});
	}

	initialize(){
		//let map = L.map('map').setView([38.891037, -77.085998], 18);
		//L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'}).addTo(map)
		mapboxgl.accessToken = 'pk.eyJ1Ijoiam9ubm9yZGxpbmciLCJhIjoiZTcwNDcxN2ZiMWU0YTZhZjM2ZWFlNTMxZWI4Y2QwNWMifQ.mMQKvbPR2IYIv7DsV2HU4A';
		var map = new mapboxgl.Map({container: 'map',style: 'mapbox://styles/mapbox/streets-v8',center: [-74.50, 40],zoom: 9});
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
