function displayCart() : void {
    let checkoutItem = localStorage.getItem("checkoutCart");
    let checkoutJson = JSON.parse(checkoutItem);
    let div:string|number = "";
    let total:number = 0;
    let totalQt:number = 0;

    if (checkoutJson != null){
        checkoutJson.forEach((stock: any) => {
            div += `
             <tr >
                 <td> ${stock.name} </td>
                 <td> ${stock.qt} </td>
                 <td> $${stock.price} ea </td>
                 <td> $${stock.price * stock.qt} </td>
             </tr>
         ` 
         totalQt += parseInt(stock.qt);
         total += (stock.qt * stock.price); 
     });
    } else {
        div = "The cart is empty";
    }
   

document.getElementById("displayCart").innerHTML = ` <table class="table table-striped table-hover">
                                                     <tr>
                                                        <th> Item Name </th> 
                                                        <th> Qty </th>
                                                        <th>  </th> 
                                                        <th> Price </th>
                                                    </tr> ${div}
                                                    <tr >
                                                        <td class="font-weight-bold h5 text-primary"> Total Price </td>
                                                        <td class="font-weight-bold h5 text-primary"> ${totalQt}</td>
                                                        <td class="font-weight-bold h5 text-primary"> </td>
                                                        <td class="font-weight-bold h5 text-primary"> $${total.toFixed(2)}</td>
                                                    </tr>
                                                    </table>`;

}


    