function showFormReg() {
	document.getElementById("reg").hidden = false;
	document.getElementById("linkForAuth").hidden=true;
	document.getElementById("linkForReg").hidden=true;
}

function sendReg(){
    var inputRegLogin=document.getElementById("nameReg");
    var inputRegEmail=document.getElementById("emailReg");
    var inputRegPass=document.getElementById("passReg");

    var loginReg = inputRegLogin.value;
    var emailReg= inputRegEmail.value;
    var passwordReg = inputRegPass.value;

    var user={
        login:loginReg,
        email: emailReg,
        password:passwordReg
    };

    var jsonReg=JSON.stringify(user);

    ajax('POST','sendReg', jsonReg ,true);
    
}
