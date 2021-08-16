//create class Plant for blueprint 
class Plant {
    constructor(id, name, price, img, qt) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.img = img;
        this.qt = qt;
    }
}
let plants = [
    new Plant(1, "ZZ Plant", 55, "images/zz-plants.jpg", 0),
    new Plant(2, "Snake Plant Laurentii", 67, "images/snake-plant.jpg", 0),
    new Plant(3, "Philodendron Green", 52, "images/philodendron-plant.jpg", 0),
    new Plant(4, "Peperomia Obtusifolia", 37, "images/Peperomia-plant.jpg", 0),
    new Plant(5, "Golden Pothos", 14.95, "images/golden-pothos.jpg", 0),
    new Plant(6, "Silver Satin Pothos Plants", 36.95, "images/silver-satin.jpg", 0)
];
function addCart() {
    //get the item from the localstorage if null get empty array 
    let cart = JSON.parse(localStorage.getItem("cartItems") || "[]");
    //push the items object in the array
    cart.push(plants);
    // Saving the data into session storage
    localStorage.setItem("cartItems", JSON.stringify(cart));
}
function stockIndex() {
    let productNumber = localStorage.getItem('cartNumbers');
    productNumber = parseInt(productNumber);
    let index = 1;
    //if there is a previous number in a storage
    //then increment by 1
    if (productNumber) {
        localStorage.setItem('cartNumbers', productNumber + 1);
        document.getElementById("size").innerHTML = productNumber + 1;
    }
    else {
        localStorage.setItem('cartNumbers', index);
        document.getElementById("size").innerHTML = index;
    }
}
function display() {
    let cartItems = localStorage.getItem("cartItems");
    let cartJson = JSON.parse(cartItems);
    // if the cartJson is null, console.log display the text 
    // if it is null, call function addCart() to add data to localStorage
    //for prevent a redunduncy added every load page 
    if (cartJson != null) {
        console.log("cart is not null");
    }
    else {
        location.reload();
        addCart();
        console.log(" null");
    }
    let div = "";
    cartJson.forEach((element) => {
        for (let item of element) {
            div += `<div class="col-4 shadow-lg p-3 mb-5 px-1 bg-white rounded">
                            <div class="card">
                             <h5 class=text-center pt-3 pb-3> ${item.name}</h5>
                                <div class="card-body">
                                    <p class="card-text"> $${item.price}</p>
                                </div>
                                <img src="${item.img}" class="card-img-top" id="img" style="height: 350px" alt="img">
                             </div>
                             <input type="button" class="btn btn-warning mt-3 mb-3" value="Add" id="addSize" onclick="addCartCheckOut(${item.id})" />
                        </div>`;
        }
    });
    let productNumber = localStorage.getItem('cartNumbers');
    productNumber = parseInt(productNumber);
    //display stock when page load
    if (productNumber) {
        document.getElementById("size").innerHTML = productNumber;
    }
    document.getElementById("display").innerHTML = div;
}
function addCartCheckOut(id) {
    let stockCart = JSON.parse(localStorage.getItem("checkoutCart") || "[]");
    let index = 0;
    //look for the right index to assign 
    for (let i = 1; i <= 6; i++) {
        if (id === i) {
            index = id - 1;
            break;
        }
    }
    console.log(index);
    let isInCart = false;
    let cartIndex = 0;
    for (let i = 0; i < stockCart.length; i++) {
        if (stockCart[i].id === id) {
            isInCart = true;
            cartIndex = i;
        }
    }
    //add quantity to the cart 
    if (isInCart) {
        stockCart[cartIndex].qt++;
    }
    else {
        stockCart.push({
            id: plants[index].id,
            name: plants[index].name,
            price: plants[index].price,
            qt: 1
        });
    }
    // Saving the data into localStorage
    localStorage.setItem("checkoutCart", JSON.stringify(stockCart));
    //display total items in cart
    stockIndex();
}
function renderCheckout() {
    location.href = "./checkout.html";
}
