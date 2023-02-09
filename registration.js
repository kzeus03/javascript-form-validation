var re_email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
var Username = document.frm.username.value;
var email = document.frm.email.value;
var pass = document.frm.passid.value;
var con_pass = document.frm.confirm_pass.value;
var PhoneNo = document.frm.phone.value;

function formValidation() {
    if(Username==null||Username==""){
        alert("Invalid User Name entered");
        return false;
    }
    else if (!re_email.test(document.frm.email.value)) {
        alert("email is empty or not valid");
        document.frm.email.focus();
        return false;
    }
    else if(PhoneNo==123456789){
        alert("Invalid phone number");
        return false;
    }
    else if(pass=="passowrd"||pass==Username){
        alert("Invalid password");
        return false;
    }
    else if(con_pass=="password"||con_pass==Username){
        alert("Invalid password");
        return false;
    }
    else if(pass!=con_pass){
        alert("Invalid password");
        return false;
    }
    else {
        return true;
    }
}
