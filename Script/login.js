var data = [];
document.querySelector("form").addEventListener("submit", loginSubmit);
function loginSubmit() {
  event.preventDefault();
  var em = document.querySelectorAll("input")[0].value;
  var pas = document.querySelectorAll("input")[1].value;
  var signUpDetails = JSON.parse(localStorage.getItem("signUpData"));
  console.log("signUpDetails", signUpDetails);
  var flag = 0;
  if (signUpDetails != null) {
    for (let i = 0; i < signUpDetails.length; i++) {
      if (em != "" && pas != "") {
        console.log("hi");
        if (
          signUpDetails[i]["email"] == em &&
          signUpDetails[i]["password"] == pas
        ) {
          alert("Correct Details :)");
          flag = 1;
          window.location.href = "./products.html";
          break;
        }
        if (flag == 0) {
          alert("Incorrect Details :(");
        }
      } else {
        alert("Details Missing :( Fill them first");
      }
    }
  } else {
    alert("SignUp Details Missing :( Fill them first");
  }
}
