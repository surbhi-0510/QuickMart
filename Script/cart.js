var data = JSON.parse(localStorage.getItem("cartArr"));
var money = data.reduce(function (sum, e, i, a) {
  var mon = Number(e.price);
  return sum + mon;
}, 0);
money = money.toFixed(2);
var len = data.length;
document.querySelector(
  "#priceP"
).innerText = `You have ${len} items in your cart and the total price is $ ${money}`;
data.map(function (e, i, ar) {
  var div1 = document.createElement("div");

  var img1 = document.createElement("img");
  img1.src = e.image;
  var name1 = document.createElement("p");
  name1.innerText = e.title;
  var div2 = document.createElement("div");
  var p1 = document.createElement("p");
  p1.innerText = e.price;
  div2.append(p1);
  var rem = document.createElement("button");
  rem.innerText = "Remove";
  rem.setAttribute("id", "rem");
  rem.addEventListener("click", function () {
    remItem(e, i);
  });
  div1.append(img1, name1, div2, rem);
  document.querySelector("#shop_cont").append(div1);
});
function remItem(e, i) {
  console.log(e, i);
  data.splice(i, 1);
  localStorage.setItem("cartArr", JSON.stringify(data));
  window.location.reload();
}
