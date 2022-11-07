var data = JSON.parse(localStorage.getItem("signUpData")) || [];
document.querySelector("form").addEventListener("submit", formSubmit);
function formSubmit() {
  event.preventDefault();
  var un = document.querySelectorAll("input")[0].value;
  var em = document.querySelectorAll("input")[1].value;
  var pn = document.querySelectorAll("input")[2].value;
  var pas = document.querySelectorAll("input")[3].value;
  if (un != "" && em != "" && pn != "" && pas != "" ){
    var ob = {
      userName: un,
      email: em,
      phoneNumber: pn,
      password: pas,
    };
    data.push(ob);
    localStorage.setItem("signUpData", JSON.stringify(data));
    console.log(data);
    alert("Signup Successfull :P");
  }
  else{
    alert("Details Missing :( Fill them first");
  }
}
