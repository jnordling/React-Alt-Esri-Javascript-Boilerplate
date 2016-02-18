import alt from 'js/alt';

class MapActions {

	initialize(){
		this.dispatch();
	}
	changeMapSize(size){
		this.dispatch(size);
	}

}
export const mapActions = alt.createActions(MapActions);
