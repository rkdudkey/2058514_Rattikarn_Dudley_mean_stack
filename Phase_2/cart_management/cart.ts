//create class Plant for blueprint 
class Plant {
    id: number;
    name: string;
    price: number;
    img: string;
    qt: number;

    constructor(id: number, name: string, price: number, img: string, qt: number) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.img = img;
        this.qt = qt;
    }
}

let plants: Plant[] = [
    new Plant(1, "ZZ Plant", 55, "images/zz-plants.jpg", 0),
    new Plant(2, "Snake Plant Laurentii", 67, "images/snake-plant.jpg", 0),
    new Plant(3, "Philodendron Green", 52, "images/philodendron-plant.jpg", 0),
    new Plant(4, "Peperomia Obtusifolia", 37, "images/Peperomia-plant.jpg", 0)
];

function addCart(): void {
    //get the item from the localstorage if null get empty array 
    let cart = JSON.parse(localStorage.getItem("cartItems") || "[]");

    //push the items object in the array
    cart.push(plants);

    // Saving the data into session storage
    localStorage.setItem("cartItems", JSON.stringify(cart));

}

function stockIndex(): void {
    let productNumber: any = localStorage.getItem('cartNumbers');
    productNumber = parseInt(productNumber);
    let index: any = 1;

    //if there is a previous number in a storage
    //then increment by 1
    if (productNumber) {
        localStorage.setItem('cartNumbers', productNumber + 1);
        document.getElementById("size").innerHTML = productNumber + 1;
    } else {
        localStorage.setItem('cartNumbers', index);
        document.getElementById("size").innerHTML = index;
    }

}


function display(): void {

    let cartItems: any = localStorage.getItem("cartItems");
    let cartJson: any = JSON.parse(cartItems);

    // if the cartJson is null, console.log display the text 
    // if it is null, call function addCart() to add data to localStorage
    //for prevent a redunduncy added every load page 
    if (cartJson != null) {
        console.log("cart is not null");
    } else {
        location.reload();
        addCart();
        console.log(" null")
    }

    let div = "";
    cartJson.forEach((element: any) => {

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
                        </div>`
        }

    });

    let productNumber: any = localStorage.getItem('cartNumbers');
    productNumber = parseInt(productNumber);
    //display stock when page load
    if(productNumber){
        document.getElementById("size").innerHTML = productNumber;
    }
    
    document.getElementById("display").innerHTML = div;
}


function addCartCheckOut(id: number): void {

    let stockCart = JSON.parse(localStorage.getItem("checkoutCart") || "[]");

    let index: number = 0;
    //look for the right index to assign 
    if (id === 1) {
        index = 0;
    } else if (id === 2) {
        index = 1;
    } else if (id === 3) {
        index = 2;
    } else if (id === 4) {
        index = 3;
    }

    let isInCart: boolean = false;
    let cartIndex: number = 0;

    for (let i = 0; i < stockCart.length; i++) {
        if (stockCart[i].id === id) {
            isInCart = true;
            cartIndex = i;
        }
    }

    //add quantity to the cart 
    if (isInCart) {
        stockCart[cartIndex].qt++;
    } else {
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

function renderCheckout(): void {
    location.href = "./checkout.html";
}

