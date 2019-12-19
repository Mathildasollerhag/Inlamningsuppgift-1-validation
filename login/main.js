$(function() {

    function validateInfo(id) {
        if ($(id).val() === '') {
            $(id).addClass('is-invalid');
            $(id).focus();
            return false
        } else {
            $(id).removeClass('is-invalid');
            $(id).addClass('is-valid');
            return true
        }
    }

    $('input').keyup(function(e) {
        let id = "#" + e.currentTarget.id
        validateInfo(id);
    });

    function validateEmail(id) {
        let emailRegEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if ($(id).val().match(emailRegEx)){ 
             $(id).addClass('is-valid');
             return true
        } else {
            $(id).removeClass('is-valid');
            $(id).addClass('is-invalid');
            return false
        }
    }
    
    $('#email').keyup(function(e) {
        let id = "#" + e.currentTarget.id
        validateEmail(id);  
    });

    function validatePassword(id) {
        if ($(id).val().length < 5){ 
             $(id).addClass('is-invalid');
             return false
        } else{
            $(id).removeClass('is-invalid');
            $(id).addClass('is-valid');
            return true
        }
    }
    
    $('#inputPassword').blur(function(e) {
        let id = "#" + e.currentTarget.id
        validatePassword(id);  
    });

    

    $('#regForm').submit((e) => {
        e.preventDefault();
        
        if (validateInfo('#email') && validateInfo('#inputPassword') && validateEmail('#email') && validatePassword('#inputPassword')){
            window.location = 'welcome.html'
        } else {
            return false
        }
    });

     

       


});