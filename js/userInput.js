$( function() {
	
	var dialog, form, name = $( "#form-name" );
	var selectedBudget = "";

	function processUserInput() {							
																	
			dialog.dialog( "close" );				
			
			$("#divMain").removeClass("transparent");
			$("#divMain").addClass("fullyVisible");															
			
			
			if ($("#budget-low").hasClass("ui-selected"))
				selectedBudget = "low";
			else if ($("#budget-mid").hasClass("ui-selected"))
				selectedBudget = "mid";
			else if ($("#budget-high").hasClass("ui-selected"))
				selectedBudget = "high";
															
			$("#name").val(selectedBudget);
			
			
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