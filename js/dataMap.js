//basic map config with custom fills
var map = new Datamap({

	scope: 'world',
	element: document.getElementById('divMap'),			
	height: 600,
			
	fills: {
		defaultFill: '#eeeeee',
		colorRank0: 'rgba(0,128,0,1)',
		colorRank1: 'rgba(32,135,0,0.96)',
		colorRank2: 'rgba(51,141,0,0.92)',
		colorRank3: 'rgba(65,148,0,0.88)',
		colorRank4: 'rgba(79,154,0,0.84)',
		colorRank5: 'rgba(91,161,0,0.80)',
		colorRank6: 'rgba(104,168,0,0.76)',
		colorRank7: 'rgba(116,174,0,0.72)',
		colorRank8: 'rgba(127,181,0,0.68)',
		colorRank9: 'rgba(139,187,0,0.64)',		
		colorRank10: 'rgba(151,194,0,60)',
		colorRank11: 'rgba(162,201,0,0.56)',
		colorRank12: 'rgba(174,208,0,0.52)',
		colorRank13: 'rgba(185,214,0,0.48)',
		colorRank14: 'rgba(197,221,0,0.44)',
		colorRank15: 'rgba(208,228,0,0.40)',
		colorRank16: 'rgba(220,235,0,0.36)',
		colorRank17: 'rgba(232,241,0,0.32)',
		colorRank18: 'rgba(243,248,0,0.28)',
		colorRank19: 'rgba(255,255,0,0.24)',					
		colorRed: 'red',
		colorGreen: 'green',
		colorYellow: 'yellow',
		colorPink: 'pink',
		colorBrown: 'brown',
		colorBlack: 'black',
	}
	,
	bubblesConfig: {
        borderWidth: 0,
        borderOpacity: 0,
        borderColor: '#FFFFFF',
        popupOnHover: true, // True to show the popup while hovering        
        popupTemplate: function(geography, data) { // This function should just return a string
          return '<div class="hoverinfo"><strong>' + data.name + '</strong></div>';
        },
        fillOpacity: 0.9,
        animate: true,
        highlightOnHover: true,
        highlightFillColor: '#FC8D59',
        highlightBorderColor: 'rgba(250, 15, 160, 0.2)',
        highlightBorderWidth: 2,
        highlightBorderOpacity: 0,
        highlightFillOpacity: 0.85,
        exitDelay: 1000, // Milliseconds
        key: JSON.stringify
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
					"<tr><td align='left' class='tooltitle'>Redd Review Index</td><td align='right' class='" + data.Senti_Class +"'>" + Number(data.pos_perc).toFixed(2) + "</td></tr>" +
					"<tr><td align='left' class='tooltitle'>Happiness Index::</td><td align='right' class=" + data.happiness_Class +">" + Number(data.happiness_index).toFixed(2) + "</td></tr>" +
					"<tr><td align='center' colspan=2 class='indextitle'>  Price Factor</td></tr>"+ 
					"<tr><td align='left' class='tooltitle'>Price Index:</td><td align='right' class='" + data.Price_Class +"'>" + data.COL_Index + "</td></tr>" +
					"<tr><td align='center' colspan=2 class='indextitle'>  Safety Factors</td></tr>"+ 
					"<tr><td align='left' class='tooltitle'>Crime Rate:</td><td align='right' class='" + data.Crime_class +"'>" + data.Crime_index + "</td></tr>" +
					"<tr><td align='left' class='tooltitle'>Travel Warning:</td><td align='right' class='" + data.Safety_Class +"'>" + data.rating + "</td></tr>" +
					"<tr><td align='center' colspan=2, class ='" + data.Safety_Class+ "'>" + data.advice + "</td></tr>" +
"</table></tbody>" +

"</div>" ;

			}
		}				
	);

}