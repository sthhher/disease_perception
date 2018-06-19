// Singleton variables
var _Genes;

export class Genes {
	constructor(cmBrowser) {
		this.cmBrowser = cmBrowser;
	}
	
	// This method returns an array of promises, ready to be run in parallel
	fetch() {
		let fetchPromises = [];
		
		if(_Genes===undefined) {
			fetchPromises.push(
				fetch('api/genes', {mode: 'no-cors'})
				.then(function(res) {
					return res.json();
				})
				.then(function(decodedJson) {
					_Genes = decodedJson;
					return _Genes;
				})
			);
		}
		
		return fetchPromises;
	}
}
