
const cart = [
    {
        name: "panda",
        price:"$2.98",
        count:1,
        image:'<img src="Assets/Images/Heart_Print.jpg"></img>'
    }
];

var products = function (name, price, count, image) {
    this.name = name
    this.price = price
    this.count = count
    this.image = image
}


function removeProduct(name) {
    for (let i=0; i<cart.length; i++) { //take a look at syntax for "for loops"
        if (cart[i].name == name) {
            cart[i].count--;
            if (cart[i]===0){
                cart.splice(i,1);
            }
            break;
        }
    }
}
removeProduct();

function addProduct(name, price, count, image) {
    for (let i=0; i<cart.length; i++) {
        if (cart[i].name == name) {
            alert(cart[i] + "is already in cart");
            break;
        }
    }
    var product = newProduct(name, price, count, image);
    cart.push(newProduct);
}
addProduct();

function clearCart() {
    $(".btn btn-primary").click(function(){  
        cart.empty
    })
}
clearCart();

$(document).ready(function(){
    $("#toys").click(function(){
        $(".product").hide();
        $(".toys").show();   
    }) 
});
$(document).ready(function(){
    $("#product").click(function(){
        $(".product").show();
        $(".toys").hide();   
    }) 
});
$(document).ready(function(){
    $("#home").click(function(){
        $(".product").show();
        $(".toys").show();   
    }) 
});
$('newStuff').html(`<h1>${cart}</h1>`);
console.log(cart[i]);

