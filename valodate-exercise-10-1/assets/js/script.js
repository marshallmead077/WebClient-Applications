"use strict";
$(document).ready(() => {

    // handle click on Join List button
    $("#join_list").click(evt => {
        let isValid = true;
        // validate the first email address
        const emailPattern = 
            /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;
        const email1 = $("#email_1").val().trim();
        if (email1 == "") { 
            $("#email_1").next().text("This field is required.");
            isValid = false;
        } else if ( !emailPattern.test(email1) ) {
            $("#email_1").next().text("Must be a valid email address.");
            isValid = false;
        } else {
            $("#email_1").next().text("");
        }
        $("#email_1").val(email1);

        // validate the second email address
        const email2 = $("#email_2").val().trim();
        if (email2 == "") { 
            $("#email_2").next().text("This field is required.");
            isValid = false; 
        } else if (email1 != email2) { 
            $("#email_2").next().text("The email addresses must match.");
            isValid = false;
        } else {
            $("#email_2").next().text("");
        }
        $("#email_2").val(email2);
        
        // validate the first name entry 
        const firstName = $("#first_name").val().trim();
        if (firstName == "") {
            $("#first_name").next().text("This field is required.");
            isValid = false;
        } else {
            $("#first_name").next().text("");
        }
        $("#first_name").val(firstName);

        // validate the last name entry
        const lastName = $("#last_name").val().trim();
if (lastName == "") {
    $("#last_name").next().text("This field is required.");
    isValid = false;
} else {
    $("#last_name").next().text("");
}
$("#last_name").val(lastName);

        // validate the state entry
		const state = $("#state").val().trim();
		if (state == "") {
			$("#state").next().text("This field is required.");
			isValid = false;
		} else if ( state.length != 2 ) {
			$("#state").next().text("Use 2-character code.");
			isValid = false;
		} else {
			$("#state").next().text("");
		}
		$("#state").val(state);
			
        // validate the zip-code entry
        const zipCode = $("#zip_code").val().trim();
        const zipCodePattern = /^\d{5}$/;
        if (zipCode == "") {
            $("#zip_code").next().text("This field is required.");
            isValid = false;
        } else if (!zipCodePattern.test(zipCode)) {
            $("#zip_code").next().text("Must be 5 digits and numeric.");
            isValid = false;
        } else {
            $("#zip_code").next().text("");
        }
        $("#zip_code").val(zipCode);

        // ... [the rest of your validation code] ...

        // prevent the default action of submitting the form if any entries are invalid 
        if (!isValid) {
            evt.preventDefault(); // This will prevent the form from submitting
        }
    });
			
		 // validate the check boxes
         const selectedCheckboxes = $(":checkbox:checked");
        if (selectedCheckboxes.length === 0) {
            $("#checkbox_error").text("At least one option must be selected.");
            isValid = false;
        } else {
            $("#checkbox_error").text("");
        }
						
		// prevent the default action of submitting the form if any entries are invalid 
        if (!isValid) {
            evt.preventDefault(); // This will prevent the form from submitting
        }
    });


    // handle click on Reset Form button
    $("#reset").click(() => {
        // clear text boxes
        $("#email_1").val("");
        $("#email_2").val("");
        $("#first_name").val("");
        $("#last_name").val("");
        $("#state").val("");
        $("#zip_code").val("");

        // reset span elements
        $("#email_1").next().text("*");
        $("#email_2").next().text("*");
        $("#first_name").next().text("*");
        $("#email_1").focus();
        // reset span elements
        $(".required-message").text("*");
         // move focus to first text box
         $("#email_1").focus();
    });
     // hide/show required message based on input
     $('input').on('input', function() {
        if ($(this).val()) {
            $(this).next('.required-message').hide();
        } else {
            $(this).next('.required-message').show();
        }
    });

    // move focus to first text box
