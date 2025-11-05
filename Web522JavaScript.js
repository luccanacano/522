function showMessage() {
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmpassword = document.getElementById("confirmpassword").value;
    const name = document.getElementById("name").value;
    const lastname = document.getElementById("lastname").value;
    const gender = document.getElementById("gender").value;
    const birthdate = document.getElementById("birthdate").value;
    const fulladdress = document.getElementById("fulladdress").value;
    const suburb = document.getElementById("suburb").value;
    const postcode = document.getElementById("postcode").value;
    const state = document.getElementById("state").value;
    const phone = document.getElementById("phone").value;

    document.getElementById("message").textContent =
        "Form submitted! " +
        "Hello " + name + 
        " (" + gender + "). " + "date of birth " + birthdate + "" + 
        + email + " on phone: " + phone + "" + 
        " on address " + fulladdress + " on suburb " + suburb + " post code " + postcode + " state of " + state +
        " with the answer for ";

    console.log("Form Data:", {
        username, email, name, lastname, gender,birthdate, fulladdress,suburb, postcode, state, phone
    });

    console.log("User has", name.length, "characters in name");

        window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth'
    });
}


function resetform() {
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmpassword = document.getElementById("confirpassword").value;
    const name = document.getElementById("name").value;
    const lastname = document.getElementById("lastname").value;
    const gender = document.getElementById("gender").value;
    const birthdate = document.getElementById("birthdate").value;
    const fulladdress = document.getElementById("fulladdress").value;
    const suburb = document.getElementById("suburb").value;
    const postcode = document.getElementById("postcode").value;
    const state = document.getElementById("state").value;
    const phone = document.getElementById("phone").value;

}



function IrParaIndex(){             window.location.href = "index.html";}
function IrPara01_Prod(){           window.location.href = "01_Prod.html";}
function IrPara02_Register(){       window.location.href = "02_Register.html";}
function IrPara03_About(){          window.location.href = "03_About.html";}
function IrParaSearchButton(){}
function IrParaCheckout(){}

function IrPara01_01_Computer(){    window.location.href = "01_01_Computer.html";}
function IrPara01_02_Laptop(){      window.location.href = "01_02_Laptop.html";}
function IrPara01_03_Monitor(){     window.location.href = "01_03_Monitor.html";}
function IrPara01_04_Printing(){    window.location.href = "01_04_Printing.html";}
function IrPara01_05_Software(){    window.location.href = "01_05_Software.html";}
function IrPara01_06_Tablet(){      window.location.href = "01_06_Tablet.html";}
