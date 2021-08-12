function displayCart() {
    let checkoutItem = localStorage.getItem("checkoutCart");
    let checkoutJson = JSON.parse(checkoutItem);
    let div = "";
    let total = 0;
    let totalQt = 0;
    checkoutJson.forEach((stock) => {
        div += `
        <tr >
            <td> ${stock.name} </td>
            <td> ${stock.qt} </td>
            <td> $${stock.price} ea </td>
            <td> $${stock.price * stock.qt} </td>
        </tr>
    `;
        totalQt += parseInt(stock.qt);
        total += (stock.qt * stock.price);
    });
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
                                                        <td class="font-weight-bold h5 text-primary"> $${total}</td>
                                                    </tr>
                                                    </table>`;
}
