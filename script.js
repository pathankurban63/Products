// Welcome Message
window.onload = function () {
  alert("Welcome to Pathan Kurban Store!");
};

// Buy Now Button
function buyNow(product) {
  alert("You selected: " + product);
}

// Contact Button
function contactUs() {
  window.location.href = "https://wa.me/91XXXXXXXXXX";
}

// Search Function
function searchProduct() {
  let input = document.getElementById("search").value.toLowerCase();
  let cards = document.getElementsByClassName("card");

  for (let i = 0; i < cards.length; i++) {
    let name = cards[i].innerText.toLowerCase();

    if (name.includes(input)) {
      cards[i].style.display = "block";
    } else {
      cards[i].style.display = "none";
    }
  }
}
