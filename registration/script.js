$(function() {

    // VALIDERING AV TOMMA FÄLT

    function validateInfo(id) {
        if ($(id).val() === '') {
            $(id).addClass('is-invalid');
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


    // VALIDERING AV EMAIL (MÅSTE SKRIVAS "lorem@ipsum.com")

    function validateEmail (id) {
        let emailRegEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if ($(id).val().match(emailRegEx)){ 
             $(id).addClass('is-valid');
             return true
        } else{
            $(id).removeClass('is-valid');
            $(id).addClass('is-invalid');
            return false
        }
    }
    
    $('#email').keyup(function(e) {
        let id = "#" + e.currentTarget.id
        validateEmail(id);  
    });


    // VALIDERING AV POSTNUMMER (MÅSTE VARA 5 SIFFROR)

    function validateZip(id) {
        if ($(id).val().length === 5){
            $(id).addClass('is-valid');
            return true
        } else {
            $(id).removeClass('is-valid');
            $(id).addClass('is-invalid');
            return false
        }
    }

    $('#zipCode').keyup(function(e) {
        let id = "#" + e.currentTarget.id
        validateZip(id);
    });


    // VALIDERING AV TELEFONNUMMER (MÅSTE VARA 10 SIFFROR - får dock innehålla - + () på rätt ställen)

    function validatePhone(id) {
        let phoneRegEx = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;

        if ($(id).val().match(phoneRegEx)){ 
             $(id).addClass('is-valid');
             return true
        } else {
            $(id).removeClass('is-valid');
            $(id).addClass('is-invalid');
            return false
        }
    }
    
    $('#phoneNumber').keyup(function(e) {
        let id = "#" + e.currentTarget.id
        validatePhone(id);  

    });


    // VALIDERING AV SELECT-LISTAN

    function validateSelect(id) {

        if ($(id).is(':checked')) {
             $(id).addClass('is-valid');
             $(id).removeClass('is-invalid');
             return true
        } else {
            $(id).removeClass('is-valid');
            $(id).addClass('is-invalid');
            return false
        }
    }
    
    $('#selectList').change(function(e) {
        let id = "#" + e.currentTarget.id
        validateSelect(id);  

    });

    function validateSelectNone(id) {

        if ($(id).val() === '') {
             $(id).addClass('is-valid');
             $(id).removeClass('is-invalid');
             return true
        } else {
            $(id).removeClass('is-valid');
            $(id).addClass('is-invalid');
            return false
        }
    }
    
    $('#selectList').click(function(e) {
        let id = "#" + e.currentTarget.id
        validateSelectNone(id);  
    });


    // VALIDERING AV RADIO-BUTTONS


    function validateRadio(name) {
        let all = $(`input[name=${name}]`);

        if(all.is(':checked')) {
            all.removeClass('is-invalid');
           

            for(radio of all) {
                if(radio.checked) {
                    $('#' + radio.id).addClass('is-valid');
                    
                }
                else {
                    $('#' + radio.id).removeClass('is-valid');
                    
                }
            }
            return true
        }
        else {
            all.addClass('is-invalid');
            return false
        }
    }

    $('input[name="customRadio"]').change(function() {
        validateRadio('customRadio');
    });
    

    // VALIDERING AV TEXTBOX

    function validateText(id) {
        if ($(id).val().length > 200){
            $(id).addClass('is-invalid');
            $(id).removeClass('is-valid');
        } else {
            $(id).removeClass('is-invalid');
            $(id).addClass('is-valid');
        }
    }

    $('#textArea').blur(function(e) {
        let id = "#" + e.currentTarget.id
        validateText(id);
    });

    function validateTextEmpty(id) {
        if ($(id).val() === ''){
            $(id).addClass('is-invalid');
            return false
        } else {
            $(id).removeClass('is-invalid');
            $(id).addClass('is-valid');
            return true
        }
    }

    $('input').blur(function(e) {
        let id = "#" + e.currentTarget.id
        validateTextEmpty(id);
    });


    // VALIDERING AV CHECKBOX

    
    function validateCheck(id) {

        if ($(id).is(':checked')) {
		    $(id).addClass('is-valid');
            $(id).removeClass('is-invalid');
            return true
        } else {
            $(id).removeClass('is-valid');
            $(id).addClass('is-invalid');
            return false
        }

    }

    $('#checkbox').change(function(e) {
    let id = "#" + e.currentTarget.id
    validateCheck(id);
    });

  
    $('#regForm').submit((e) => {
        e.preventDefault();
        
        if (validateInfo('#firstName') && validateInfo('#lastName') && validateInfo('#address') && validateInfo('#zipCode') && validateInfo('#city') && validateInfo('#email') && validateInfo('#phoneNumber') && validateEmail('#email') && validateZip('#zipCode') && validatePhone('#phoneNumber') && validateSelectNone('#selectList') && validateRadio('customRadio') && validateCheck('#checkbox')){
            window.location = 'thanx.html';
            

        } else { 
            return false
            
        }
        

        
    // $('#regForm').submit((e) => {
    //     e.preventDefault();
        
    //     if (validateInfo('#email') && validateInfo('#inputPassword') && validateEmail('#email') && validatePassword('#inputPassword')){
    //         window.location = 'welcome.html'
    //     } else {
    //         return false
    //     }
    // });


      
    });

});