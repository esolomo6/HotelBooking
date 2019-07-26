
$(document).ready(function() {
    var emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+.[A-Za-z]{2,4}\b/;
    $("#reservation_form").submit(function(evt) {
        var isValid = true;
        var arrival_date = $("#arrival_date").val().trim();

        /**
		 date pattern is
		 DD/MM/YYYY
		 note no validation for is valid month or day within month
		*/
        var datePattern =/^([0-9]{1,2})\/([0-9]{1,2})\/([0-9]{2,4})$/;
        if (!(arrival_date).match(datePattern)){
            $("#arrival_date").next().text("Please enter a valid date");
            isValid = false;
		}
        else {
            $("#arrival_date").next().text("");
        }
        $("#arrival_date").val(arrival_date);

        var nights = $("#nights").val().trim();
        if(nights == "" || isNaN(nights)){
            $("#nights").next().text("Please enter the number of nights");
            isValid = false;
        }
        else {
            $("#nights").next().text("");
        }
        $("#nights").val(nights);

        var name = $("#name").val().trim();
        if(name == ""){
            $("#name").next().text("Fill in this blank!");
            isValid = false;
        }
        else {
            $("#name").next().text("");
        }
        $("#name").val(name);

        var email = $("#email").val().trim();
        if(!(email.match(emailPattern))){
            $("#email").next().text("Please enter a valid email address!");
            isValid = false;
        }
        else {
            $("#email").next().text("");
        }
        $("#email").val(email);


        /**
		 *valid number formats
		 (123) 456-7890
         123-456-7890
         123.456.7890
         1234567890
		 * */
        var phone_pattern = /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/;
        var phone = $("#phone").val().trim();
        if(!(phone.match(phone_pattern))){
            $("#phone").next().text("Enter a valid phone number");
            isValid = false;
        }
        else {
            $("#phone").next().text("");
        }
        $("#phone").val(phone);


        if(isValid == false){
            evt.preventDefault();
        }
    });

    $("#arrival_date").focus();

}); // end ready