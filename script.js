function clearErrors(){
    errors = document.getElementsByTagName("span");
    for(item in errors){
        item.innerHTML = " ";
    }
}

function setError(id, err){
    // let element = document.getElementById(id);
    let element = document.getElementsByClassName(id + "-error")[0];
    element.style.color = "red";
    element.innerHTML = err;
}

function formValidation(){
    let returnVal = true;
    let name = document.forms["regForm"]["fname"].value;
    
    //checking enterd name
    if(name.length <= 5){
        setError("fname", "*Length of the name is too short!");
        returnVal = false;
    }

    //email checking
    let email = document.forms["regForm"]["email"].value;

    if(email.length > 25){
        setError("email", "*your email is too long.");
    }

    // phone number checking
    let phone = document.forms["regForm"]["phone"].value;

    if(phone.length < 10){
        setError("phone", "*you have not enterd the full No."); 
    } else {
        setError("phone", "*you have entered more No.")
    }

    clearErrors();

    return returnVal;
}
