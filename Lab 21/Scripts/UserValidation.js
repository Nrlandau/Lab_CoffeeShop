
function IsValid()
{
    var Em = IsValidEmail();
    var Fn = IsValidFirstName();
    var Ln = IsValidLastName();
    var Pass = IsValidPassword();
    var Pn = IsValidPhoneNumber();
    var CPass = ConfPass();
    var CEm = ConfEmail();
    if (Em === true && Fn === true && Ln === true && Pass === true && Pn === true && CPass === true && CEm === true)
    {
        return true;
    }
    return false;
}


function IsValidFirstName()
{
    var name = document.getElementById("FirstName").value;
    if (!(/^[a-zA-Z]{3,}$/.test(name))) {
        //alert("ASDFASDFASDF");
        document.getElementById("FirstError").innerHTML = "First name must be 3 letters or more.";
        return false;
    }
    document.getElementById("FirstError").innerHTML = "";
    return true;
}
function IsValidLastName()
{
    var name = document.getElementById("LastName").value;
    if (!(/^[a-zA-Z]{2,}$/.test(name))) {
        document.getElementById("LastError").innerHTML = "Last name must be 2 letters or more ";
        return false;
    }
    document.getElementById("LastError").innerHTML = "";
    return true;
}
function IsValidEmail()
{
    var email = document.getElementById("Email").value;
    if (!(/^[a-zA-Z]\w{2,}@(([a-zA-Z]{2,})|([A-Za-z0-9_]{2,}\.[a-zA-Z]{2,}))$/.test(email))) {
        document.getElementById("EmailError").innerHTML = "Email must be ---@-- or ---@--.--";
        return false;
    }
    document.getElementById("EmailError").innerHTML = "";
    return true;
}
function IsValidPhoneNumber()
{
    var phone = document.getElementById("Phone").value;
    if (!(/^[0-9]{10}$/.test(phone))) {
        document.getElementById("PhoneError").innerHTML = "phone number must be 10 digits";
        return false;
    }
    document.getElementById("PhoneError").innerHTML = "";
    return true;
}
function IsValidPassword()
{
    var pass = document.getElementById("Password").value;
    if (!(/^[a-zA-Z0-9_]{8,}$/.test(pass))) {
        document.getElementById("PassError").innerHTML = "Password must be 8 or more alphanumeric characters";
        return false;
    }
    document.getElementById("PassError").innerHTML = "";
    return true;
}
function ConfEmail() {
    var email = document.getElementById("Email").value;
    var confEmail = document.getElementById("ConfEmail").value;
    if (email === confEmail) {
        document.getElementById("EmailMatch").innerHTML = "";
        return true;
    }
    document.getElementById("EmailMatch").innerHTML = "Emails do not match";
    return false;
}
function ConfPass() {
    var pass = document.getElementById("Password").value;
    var confPass = document.getElementById("ConfPassword").value;
    if (pass === confPass) {
        document.getElementById("PassMatch").innerHTML = "";
        return true;
    }
    document.getElementById("PassMatch").innerHTML = "Password do not match";
    return false;
}

function IsValite() {
    return false;
    var name = document.getElementById("FirstName").value;
    if (!(/^[a-zA-Z]{4,}$/.test(name))) {
        return false;
    }
    return true;
}