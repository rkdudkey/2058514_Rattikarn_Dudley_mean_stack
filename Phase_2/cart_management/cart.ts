const items: { id: number, name: string, price: number, img: string }[] = [
    {
        id: 1,
        name: `ZZ Plant`,
        price: 55,
        img: `images/zz-plants.jpg`
    },
    {
        id: 2,
        name: "Snake Plant Laurentii",
        price: 67,
        img: 'images/snake-plant.jpg'
    },
    {
        id: 3,
        name: "Philodendron Green",
        price: 52,
        img: 'images/philodendron-plant.jpg'
    },
    {
        id: 4,
        name: "Peperomia Obtusifolia",
        price: 37,
        img: 'images/Peperomia-plant.jpg'
    }
]


let stockCart = [];
let stockIndex = 0;
let filterStock = [];

function addCart(): void {
    //get the item from the localstorage if null get empty array 
    let cart = JSON.parse(sessionStorage.getItem("cartItems") || "[]");

    //push the items object in the array
    cart.push(items);

    // Saving the data into session storage
    sessionStorage.setItem("cartItems", JSON.stringify(cart));

}

function display(): void {

    // call add cart
    addCart();

    let cartItems = localStorage.getItem("cartItems");
    let cartJson = JSON.parse(cartItems);

    cartJson.forEach((element: any) => {
        for (let item of element) {
            document.getElementById("display").innerHTML += `<div class="col-4 shadow-lg p-3 mb-5 px-1 bg-white rounded">
                        <div class="card">
                         <h5 class=text-center pt-3 pb-3> ${item.name}</h5>
                            <div class="card-body">
                                <p class="card-text"> $${item.price}</p>
                            </div>
                            <img src="${item.img}" class="card-img-top" id="img" style="height: 350px" alt="img">
                         </div>
                         <input type="button" class="btn btn-warning mt-3 mb-3" value="Add" id="addSize" onclick="addCartCheckOut('${item.name}', '${item.price}')" />
                    </div>`
        }


    });
}

function addCartCheckOut(itemName: string, itemPrice: number): void {
    stockCart.push({
        name: itemName,
        price: itemPrice,
    })

    let size = document.getElementById("size");
    stockIndex += 1;
    size.innerHTML = stockIndex.toString();
}

function renderCheckout(): void {
    location.href = "./checkout.html";

    const uniqueVal = new Set();

    filterStock = stockCart.filter((obj) => {
        //check if the name already in the set
        const isPresent = uniqueVal.has(obj.name);

        //add name to the set
        uniqueVal.add(obj.name);

        return !isPresent;
    })

    // Saving the data into localStorage
    localStorage.setItem("checkoutCart", JSON.stringify(filterStock));

}


