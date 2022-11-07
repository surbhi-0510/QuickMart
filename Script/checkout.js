document.querySelector("form").addEventListener("submit", checkoutPress);
function checkoutPress() {
  event.preventDefault();
  var cn = document.querySelectorAll("input")[0].value;
  var cvv = document.querySelectorAll("input")[1].value;
  var otp = document.querySelectorAll("input")[2].value;
  var exp = document.querySelectorAll("input")[3].value;
  if (cn != "" && cvv != "" && exp != "") {
    if (otp == "1234") {
      alert("Payement done! Yippeee!!!");

      window.location.href = "success.html";
    } else {
      alert("OTP is Wrong :(");
    }
  } else {
    alert("Details Missing :( Fill them first");
  }
}
