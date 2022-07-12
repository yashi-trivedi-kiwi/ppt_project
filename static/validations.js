$(document).ready(function(){
    $("#registerForm").validate({
        rules: {
         fullname: {
          required: true,
          minlength:3,
          nameCheck:true,
         },
         email: {
          required: true,
          email:true,
          minlength:5,
          emailExt: true
        },
        username: {
        required: true,
        uniqueUserName: true
        },
        phone: {
          required: true,
          minlength:14
         },
         profile_pic: {
              required: true,
         },
         url: {
               required:true,
               url:true
         },
         card_number: {
               required: true,
               creditcard: true
         }
     },
        messages: {
            fullname: {
            required: "Please enter your name.",
            },
            email: {
            required: "Please enter your email.",
            email: "Please provide a valid email."
            },
            phone: {
            required: "Please enter your phone number.",
            minlength: "Please provide a valid phone number."

            },
            profile_pic: {
            required: "Please upload your Profile."
            },
            url:{
            required: "Please enter your url",
            url: "Please provide a valid url."
            },
            card_number: {
            required:"Please enter your card number",
            creditcard: "Please provide a valid card number."
            }
        },
        highlight: function(element) {
        $(element).removeClass("error");
        }
    });
    $.validator.addMethod("uniqueUserName", function(value, element) {
      $.ajax({
          type: "POST",
           url: "php/get_save_status.php",
          data: "checkUsername="+value,
          dataType:"html",
       success: function(msg)
       {
          // if the user exists, it returns a string "true"
          if(msg == "true")
             return false;  // already exists
          return true;      // username is free to use
       }
      })}, "Username is Already Taken");
        jQuery.validator.addMethod("emailExt", function(value, element, param) {
            return value.match(/^[a-zA-Z0-9_\.%\+\-]+@[a-zA-Z0-9\.\-]+\.com/);
        },'Please provide a valid email.');
        jQuery.validator.addMethod("nameCheck", function(value, element, param) {
            return value.match(/^[a-zA-Z\d\s]+ [a-zA-Z\d\s]+$/);
        },'Please provide a valid fullname.');
});