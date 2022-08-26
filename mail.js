
  function validateName() {

    var name = document.getElementById('name').value;

    if(name.length == 0) {

      producePrompt('Name is required', 'name-error' , 'red')
      return false;

  }

  if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {

      producePrompt('First and last name, please.','name-error', 'red');
      return false;

  }

  producePrompt('Valid', 'name-error', 'green');
  return true;

}


function validateEmail () {

var email = document.getElementById('fromName').value;

if(email.length == 0) {

  producePrompt('Email Invalid','email-error', 'red');
  return false;

}

if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {

  producePrompt('Email Invalid', 'email-error', 'red');
  return false;

}

producePrompt('Valid', 'email-error', 'green');
return true;

}

function validatePhone() {

    var phone = document.getElementById('sbj').value;
    
    if(phone.length == 0) {
        producePrompt('Phone number is required.', 'phone-error', 'red');
        return false;
    } 

    
    if(phone.length <= 9 ) {
        producePrompt(' Too short, invalid', 'phone-error', 'red');
        return false;
    }
    
    if(!phone.match(/^\d{10}/)) {
        producePrompt('Only digits, please.' ,'phone-error', 'red');
        return false;
    }
    
    producePrompt('Valid', 'phone-error', 'green');
    return true;
    
 }
    

function validateMessage() {
var message = document.getElementById('msg').value;
var required = 30;
var left = required - message.length;

if (left > 0) {
  producePrompt(left + ' more characters required','message-error','red');
  return false;
}

 producePrompt('Valid', 'message-error', 'green');
 return true;

  }

function validateForm() {
if (!validateName() || !validatePhone() || !validateEmail() || !validateMessage()) {
  jsShow('submit-error');
  producePrompt('Please fix errors to submit.', 'submit-error', 'red');
  setTimeout(function(){jsHide('submit-error');}, 2000);
  return false;
 } else {
    sendMail();
  }
}

function jsShow(id) {
document.getElementById(id).style.display = 'block';
}

function jsHide(id) {
document.getElementById(id).style.display = 'none';
}


function producePrompt(message, promptLocation, color) {

document.getElementById(promptLocation).innerHTML = message;
document.getElementById(promptLocation).style.color = color;

}




function sendMail(params) {
   var btn = document.getElementById("button");

    btn.textContent = "Sending, please wait...";

const serviceID = 'service_xbb0lzi';
const templateID = 'template_w6jsmnj';



 var textarea = document.getElementById("msg");
 var textsubj = document.getElementById("sbj");
 var textname = document.getElementById("name").value;
 var final = "Name: "+ textname + "|" + " Subject: " + textsubj.value + " | " + " Message: " + textarea.value;
 
    var temParams = {
        from_name : document.getElementById("fromName").value,
        to_name : "davidobinna579@gmail.com",
        message : final, 
    };

    emailjs.send(serviceID, templateID, temParams)
    .then(function(res) {
        alert("Success! Your Message has been delivered to david, you will get a response shortly");
        console.log("Success",res.status);      
        btn.textContent = "Send Message";
    })
}