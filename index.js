function ValidateEmail(inputText)
{
var mailformat = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;
const x = document.getElementById("email");
const y = document.getElementById("error");
if(inputText.value.match(mailformat))
{    
document.form.email();
return true;
}
else
{
    document.getElementById("error").innerHTML = "Please provide a valid email adress"; 
    y.style.paddingBottom = "20px";
  x.classList.add("red");
document.form.email();
return false;
}
}