//object data to interate and display the shopping cart 
var items = [
    {
        name: "ZZ Plant",
        price: 55,
        img: "images/zz-plants.jpg"
    },
    {
        name: "Snake Plant Laurentii",
        price: 67,
        img: 'images/snake-plant.jpg'
    },
    {
        name: "Philodendron Green",
        price: 52,
        img: 'images/philodendron-plant.jpg'
    },
    {
        name: "Peperomia Obtusifolia",
        price: 37,
        img: 'images/Peperomia-plant.jpg'
    }
];
//checkout array to display in checkout page
var stockCart = [];
var stockIndex = 0;
var filterStock = [];
function addCart() {
    //get the item from the localstorage if null get empty array 
    var cart = JSON.parse(localStorage.getItem("cartItems") || "[]");
    //push the data object 
    cart.push(items);
    // Saving the data into localStorage
    localStorage.setItem("cartItems", JSON.stringify(cart));
}
function display() {
    // call add cart
    addCart();
    var cartItems = localStorage.getItem("cartItems");
    var cartJson = JSON.parse(cartItems);
    cartJson.forEach(function (element) {
        for (var _i = 0, element_1 = element; _i < element_1.length; _i++) {
            var item = element_1[_i];
            document.getElementById("display").innerHTML += "<div class=\"col-4 shadow-lg p-3 mb-5 px-1 bg-white rounded\">\n                        <div class=\"card\">\n                         <h5 class=text-center pt-3 pb-3> " + item.name + "</h5>\n                            <div class=\"card-body\">\n                                <p class=\"card-text\"> $" + item.price + "</p>\n                            </div>\n                            <img src=\"" + item.img + "\" class=\"card-img-top\" id=\"img\" style=\"height: 350px\" alt=\"img\">\n                         </div>\n                         <input type=\"button\" class=\"btn btn-warning mt-3 mb-3\" value=\"Add\" id=\"addSize\" onclick=\"addCartCheckOut('" + item.name + "', '" + item.price + "')\" />\n                    </div>";
        }
    });
}
function addCartCheckOut(itemName, itemPrice) {
    stockCart.push({
        name: itemName,
        price: itemPrice
    });
    var size = document.getElementById("size");
    stockIndex += 1;
    size.innerHTML = stockIndex.toString();
}
function renderCheckout() {
    location.href = "./checkout.html";
    var uniqueVal = new Set();
    filterStock = stockCart.filter(function (obj) {
        //check if the name already in the set
        var isPresent = uniqueVal.has(obj.name);
        //add name to the set
        uniqueVal.add(obj.name);
        return !isPresent;
    });
    // Saving the data into localStorage
    localStorage.setItem("checkoutCart", JSON.stringify(filterStock));
}
function displayCart() {
    var checkoutItem = localStorage.getItem("checkoutCart");
    var checkoutJson = JSON.parse(checkoutItem);
    checkoutJson.forEach(function (stock) {
        document.getElementById("displayCart").innerHTML =
            "<table>\n        \n        <tr>\n            <th> Item Name </th> \n            <th> Price </th> \n        </tr>\n        <tr>\n            <td> " + stock.name + " </td>\n            <td> " + stock.price + " </td>\n        </tr>\n    </table>";
    });
}
