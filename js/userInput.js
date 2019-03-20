$( function() {
	
	var dialog, form, name = $( "#form-name" );
	

	function processUserInput() {							
																	
			dialog.dialog( "close" );				
			
			$("#divMain").removeClass("transparent");
			$("#divMain").addClass("fullyVisible");															
	
			// ------- budget 
			var selectedBudget = "";	
			if ($("#budget-low").hasClass("ui-selected"))
				selectedBudget = "low";
			else if ($("#budget-mid").hasClass("ui-selected"))
				selectedBudget = "mid";
			else if ($("#budget-high").hasClass("ui-selected"))
				selectedBudget = "high";
											
			// update to top panel
			$("#budget").val(selectedBudget);
			
			// ------- density
			var selectedDensity = "";	
			if ($("#density-low").hasClass("ui-selected"))
				selectedDensity = "low";
			else if ($("#density-mid").hasClass("ui-selected"))
				selectedDensity = "mid";
			else if ($("#density-high").hasClass("ui-selected"))
				selectedDensity = "high";
											
			// update to top panel
			$("#density").val(selectedDensity);
			
								
			// call to rerun analyze
			analyze();						
			
	}

	dialog = $("#inputDialog").dialog({
		autoOpen: false,
		height: 430,
		width: 600,
		modal: true,
		buttons: {
			"Submit": processUserInput
		},
		close: function() {
			form[0].reset();					
		}
	});

	form = dialog.find( "form" ).on( "submit", function( event ) {
		event.preventDefault();				
		processUserInput();
	});

	$(document).ready(function(){ 
		dialog.dialog( "open" );
	})

} );		