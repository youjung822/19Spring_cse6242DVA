//basic map config with custom fills
var map = new Datamap({

	scope: 'world',
	element: document.getElementById('divMap'),			
	height: 600,
	
	fills: {
		defaultFill: '#eeeeee',
		colorBlue: 'rgba(0,244,244,0.9)',
		colorRed: 'red',
		colorGreen: 'green',
		colorYellow: 'yellow',
		colorPink: 'pink',
		colorBrown: 'brown',
		colorBlack: 'black',
	}

	// data: {
		// USA: {fillKey: 'lt50' },
		// RUS: {fillKey: 'lt50' },
		// CAN: {fillKey: 'lt50' },
		// BRA: {fillKey: 'gt50' },
		// ARG: {fillKey: 'gt50'},
		// COL: {fillKey: 'gt50' },
		// AUS: {fillKey: 'gt50' },
		// ZAF: {fillKey: 'gt50' },
		// MAD: {fillKey: 'gt50' }       
	// }
})
  
//sample of the arc plugin
// map.arc([
	// {
	// origin: {
		// latitude: 40.639722,
		// longitude: 73.778889
	// },
	// destination: {
		// latitude: 37.618889,
		// longitude: -122.375
	// }
	// },
	// {
		// origin: {
			// latitude: 30.194444,
			// longitude: -97.67
		// },
		// destination: {
			// latitude: 25.793333,
			// longitude: -0.290556
		// }
	// }
// ], {strokeWidth: 2});		 

//bubbles, custom popup on hover template
map.bubbles([
	{name: 'Wood', latitude: -37.81, longitude: 144.96, radius: 16, fillKey: 'colorBlue'},
	{name: 'Brian', latitude: 22.39, longitude: 114.11, radius: 8, fillKey: 'colorRed'},
	{name: 'Ankur', latitude: 23.39, longitude: 115.11, radius: 8, fillKey: 'colorGreen'},
	{name: 'SiOnn', latitude: 4.21, longitude: 101.98, radius: 20, fillKey: 'colorBrown'},
	{name: 'YouJung', latitude: 36.20, longitude: 138.25, radius: 10, fillKey: 'colorPink'},
	{name: 'XiaoQi', latitude: 29.43, longitude: 106.91, radius: 18, fillKey: 'colorYellow'},			
	{name: 'Georgia Tech', latitude: 33.95, longitude: -83.36, radius: 35, fillKey: 'colorBlack'},			
	], {
	popupTemplate: function(geo, data) { 
		return "<div class='hoverinfo'>" + data.name + " is here</div>";
	}
});