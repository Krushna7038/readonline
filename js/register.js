function clearErrors(){
    errors = document.getElementsByClassName('formerror');
    for(let item of errors){
        item.innerHTML = "";
    }
}

function seterror(id, error){
    element = document.getElementById(id);
    element.getElementsByClassName('formerror')[0].innerHTML = error;
}

function validateForm(){
    var name_valid = /^[A-Za-z]+$/;
    var returnval = true;
    clearErrors();

    var name = document.forms['myForm']["fname"].value;
    if(name.length<5){
        seterror("name", "**Length of name is too short.");
        returnval = false;
    }
    else if(name.match(name_valid)){
        returnval;
    }
    else{
        seterror("name", "**Numbers and special symbols are not allowed.");
        returnval = false;
    }

    var email = document.forms['myForm']["femail"].value;
    if(email.length>15){
        seterror("email", "**Length of email is  too much.");
        returnval = false;
    }

    var phone = document.forms['myForm']["fphone"].value;
    if(phone.length != 10){
        seterror("phone", "**Mobile number is not valid.");
        returnval = false;
    }

    var addr = document.forms['myForm']["faddr"].value;
    if(addr.length<15){
        seterror("addr", "**Address is too short. Enter full address.");
        returnval = false;
    }

    var pin = document.forms['myForm']["fpin"].value;
    if(pin.length != 6){
        seterror("pin", "**Enter valid pin code.");
        returnval = false;
    }

    var pass = document.forms['myForm']["fpass"].value;
    if(pass.length<8){
        seterror("pass", "**Password must be atleast 8 character.");
        returnval  = false;
    }

    var cpass = document.forms['myForm']["fcpass"].value;
    if(cpass != pass){
        seterror("cpass", "**Password must be unique.");
        returnval = false;
    }

    return returnval;

}