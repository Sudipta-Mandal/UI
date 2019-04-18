// Form Validation using JQuery
$('#register-form').validate({
    rules : {
        firstname :{
            required : true
        },
        lastname : {
            required:true
        },
        username : {
            required:true,
            minlength: 5
        },
        email :{
            required : true,
            email:true
        },
        password:{
            required:true,
            minlength:5
        },
        c_password:{
            required:true,
            minlength:5,
            equalTo : '#password'
        },
        terms : {
            required:true
        }
    },
    messages:{
        firstname:{
            required:'Please provide the First Name'
        },
        lastname:{
            required:'Please provide the Last Name'
        },
        username:{
            required: 'Please provide a User Name',
            minlength: 'Username Must be at least 5 letters'
        },
        email:{
            required:'please provide an Email',
            email:'Please provide a valid email address'
        },
        password:{
            required:'Please provide a Password',
            minlength: 'Password should be min 5 letters'
        },
        c_password:{
            required:'Please provide a Confirm Password',
            minlength:'Confirm Password should be min 5 letters',
            equalTo:'Both the passwords to be matched'
        },
        terms:{
            required:'Please accept the terms'
        }
    },
    errorPlacement: function ( error, element ) {
        // Add the `invalid-feedback` class to the error element
        error.addClass( "invalid-feedback" );

        if ( element.prop( "type" ) === "checkbox" ) {
            error.insertAfter( element.next( "label" ) );
        } else {
            error.insertAfter( element );
        }
    },
    highlight: function (element) {
        $( element ).addClass( "is-invalid" ).removeClass( "is-valid" );
    },
    unhighlight: function (element) {
        $( element ).addClass( "is-valid" ).removeClass( "is-invalid" );
    }
});

$.validator.setDefaults( {
    submitHandler: function () {
        alert( "Form Submitted!" );
    }
} );