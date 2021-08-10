function displayCart() {
    var checkoutItem = localStorage.getItem("checkoutCart");
    var checkoutJson = JSON.parse(checkoutItem);
    var div = "";
    var total = 0;
    checkoutJson.forEach(function (stock) {
        div += "\n        <tr >\n            <td> " + stock.name + " </td>\n            <td> $" + stock.price + " </td>\n        </tr>\n    ";
        total += parseInt(stock.price);
    });
    document.getElementById("displayCart").innerHTML = " <table class=\"table table-striped table-hover\">\n                                                     <tr>\n                                                        <th> Item Name </th> \n                                                        <th> Price </th> \n                                                    </tr> " + div + "\n                                                    <tr >\n                                                        <td class=\"font-weight-bold h5 text-primary\"> Total Price </td>\n                                                        <td class=\"font-weight-bold h5 text-primary\"> $" + total + "</td>\n                                                    </tr>\n                                                    </table>";
}
