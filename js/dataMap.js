//basic map config with custom fills
var map = new Datamap({

	scope: 'world',
	element: document.getElementById('divMap'),			
	height: 600,
			
	fills: {
		defaultFill: '#eeeeee',
		colorRank0: 'rgba(0,128,0,1)',
		colorRank1: 'rgba(32,135,0,0.95)',
		colorRank2: 'rgba(51,141,0,0.9)',
		colorRank3: 'rgba(65,148,0,0.85)',
		colorRank4: 'rgba(79,154,0,0.8)',
		colorRank5: 'rgba(91,161,0,0.75)',
		colorRank6: 'rgba(104,168,0,0.7)',
		colorRank7: 'rgba(116,174,0,0.65)',
		colorRank8: 'rgba(127,181,0,0.6)',
		colorRank9: 'rgba(139,187,0,0.55)',		
		colorRank10: 'rgba(151,194,0,50)',
		colorRank11: 'rgba(162,201,0,0.45)',
		colorRank12: 'rgba(174,208,0,0.40)',
		colorRank13: 'rgba(185,214,0,0.35)',
		colorRank14: 'rgba(197,221,0,0.30)',
		colorRank15: 'rgba(208,228,0,0.25)',
		colorRank16: 'rgba(220,235,0,0.20)',
		colorRank17: 'rgba(232,241,0,0.15)',
		colorRank18: 'rgba(243,248,0,0.10)',
		colorRank19: 'rgba(255,255,0,0.05)',					
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
				return "<div class='hoverinfo'>" +data.name  +
				"<br/>" +
"<table><tbody>" +
					"<tr><td align='center' colspan=2 class='indextitle'>  Sentimental Reviews </td></tr>"+ 
					"<tr><td align='left'>Redd Review Index</td><td align='right' class='" + data.Senti_Class +"'>" + Number(data.pos_perc).toFixed(2) + "</td></tr>" +
					"<tr><td align='left'>Happiness Index::</td><td align='right' class=" + data.happiness_Class +">" + Number(data.happiness_index).toFixed(2) + "</td></tr>" +
					"<tr><td align='center' colspan=2 class='indextitle'>  Price Factor</td></tr>"+ 
					"<tr><td align='left'>Price Index:</td><td align='right' class='" + data.Price_Class +"'>" + data.COL_Index + "</td></tr>" +
					"<tr><td align='center' colspan=2 class='indextitle'>  Safety Factors</td></tr>"+ 
					"<tr><td align='left'>Crime Rate:</td><td align='right' class='" + data.Crime_class +"'>" + data.Crime_index + "</td></tr>" +
					"<tr><td align='left'>Travel Warning:</td><td align='right' class='" + data.Safety_Class +"'>" + data.rating + "</td></tr>" +
					"<tr><td align='center' colspan=2, class ='" + data.Safety_Class+ "'>" + data.advice + "</td></tr>" +
"</table></tbody>" +

"</div>" ;

			}
		}				
	);

}