//basic map config with custom fills
var map = new Datamap({

	scope: 'world',
	element: document.getElementById('divMap'),			
	height: 600,
			
	fills: {
		defaultFill: '#eeeeee',
		colorBlue0: 'rgba(0,244,244,1)',
		colorBlue1: 'rgba(0,244,244,0.95)',
		colorBlue2: 'rgba(0,244,244,0.9)',
		colorBlue3: 'rgba(0,244,244,0.85)',
		colorBlue4: 'rgba(0,244,244,0.8)',
		colorBlue5: 'rgba(0,244,244,0.75)',
		colorBlue6: 'rgba(0,244,244,0.7)',
		colorBlue7: 'rgba(0,244,244,0.65)',
		colorBlue8: 'rgba(0,244,244,0.6)',
		colorBlue9: 'rgba(0,244,244,0.55)',		
		colorBlue10: 'rgba(0,244,244,50)',
		colorBlue11: 'rgba(0,244,244,0.45)',
		colorBlue12: 'rgba(0,244,244,0.40)',
		colorBlue13: 'rgba(0,244,244,0.35)',
		colorBlue14: 'rgba(0,244,244,0.30)',
		colorBlue15: 'rgba(0,244,244,0.25)',
		colorBlue16: 'rgba(0,244,244,0.20)',
		colorBlue17: 'rgba(0,244,244,0.15)',
		colorBlue18: 'rgba(0,244,244,0.10)',
		colorBlue19: 'rgba(0,244,244,0.05)',				
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

		

		
function addBubbles(){		
		
	map.bubbles(	
		bubbleArray,
		{		
			popupTemplate: function(geo, data) { 
				return "<div class='hoverinfo'>" + data.name + "</div>";
			}
		}				
	);

}