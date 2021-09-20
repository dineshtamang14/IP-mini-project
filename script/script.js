function setError(id, msg){
    document.getElementById(id).innerHTML = msg;
}

function formValidation(){
    returnVal = true;

    let name = document.forms["regForm"]["fname"].value;
    let last = document.forms["regForm"]["lname"].value;
    let email = document.forms["regForm"]["email"].value;
    let phone = document.forms["regForm"]["phone"].value;

    
    //checking enterd name
    if(2 < name.length <= 20){
        setError("fname-err", "*Length of the First name is too short or long!");
        returnVal = false;
    }

    if(2 < last.length <= 20){
        setError("lname-err", "*Length of the last name is too short or long!")
    }

    //email checking

    if(email.length <= 25){
        setError("email-err", "*your email is too long.");
        returnVal = false;
    }

    // phone number checking

    if(phone.length < 10){
        setError("phone-err", "*you have not enterd the full No."); 
        returnVal = false;
    } else if(phone.length > 10) {
        setError("phone-err", "*you have entered more No.")
        returnVal = false;
    }

    return returnVal;
}
