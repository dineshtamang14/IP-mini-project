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
    if((name.length <= 2) || (name.length > 20)){
        setError("fname-err", "*Length of the First name is too short or long!");
        returnVal = false;
    }

    if((last.length <= 2) || (last.length > 20)){
        setError("lname-err", "*Length of the last name is too short or long!")
    }

    //email checking

    if(email.length <= 25){
        setError("email-err", "*your email is too long.");
        returnVal = false;
    } else if(email.indexOf('@') <= 0 ){
        setError("email-err", "*@ position should not be in 0th position.");
    } else if((email.charAt(emails.length-4)!='.') && (email.charAt(emails.length-3)!='.')){
        setError("email-err", "*.Invalid Position.");
    }

    // phone number checking

    if(phone.length < 10){
        setError("phone-err", "*you have not enterd the full No."); 
        returnVal = false;
    } else if(phone.length > 10) {
        setError("phone-err", "*you have entered more No.")
        returnVal = false;
    } else if(isNaN(mobileNumber)){
        setError("phone-err", "*Please enter number only.");
    }

    return returnVal;
}
