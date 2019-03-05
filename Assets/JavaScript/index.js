
const cart = [
    {
        id :1,
        name: "panda",
        price:"$2.98",
        count:1,
        image:'<img src="Assets/Images/Heart_Print.jpg"></img>'
    }
];

var products = function (id,name, price, count) {
    var $target = $(this);

    var id = $target.data('id');
    var name = $target.data('name');
    var price= $target.image('price');
    var count = $target.data('count');
   
    cart.push(id,cart.name,cart.price,cart.count);
    var name =document.getElementsByClassName("name");
console.log(name);
}

//    // $(document).on('click', targetSelector,function removeProduct(name ){  
       
//         for (let i=0; i<cart.length; i++) { 
//             if (cart[i].name == name) {
//                 cart[i].count--;
//                 if (cart[i]===0){
//                     cart.splice(i,1);
//                 }
//                 removeProduct();
//                 break;
//             }
//         }   
//     })
// function removeProduct(name) {
//     for (let i=0; i<cart.length; i++) { 
//         if (cart[i].name == name) {
//             cart[i].count--;
//             if (cart[i]===0){
//                 cart.splice(i,1);
//             }
//             break;
//         }
//     }
// }
//removeProduct();

$(".add").on('click',function(){
    var $target = $(this);

    var id = $target.data('id');
    var name = $target.data('name');
    var price= $target.data('price');
    var count = $target.data('count');
   
    cart.push(id,name,price,count);
    $.each(cart, function (key, value){
        alert(JSON.stringify(key+":"+value));
    });
}

);


//$(".add").on('click', targetSelector, addProduct(name, price, count, image) {
    //console.log(name);
    //for (let i=0; i<cart.length; i++) {
       // if (cart[i].name == name) {
          //  alert(cart[i] + "is already tarin cart");
            
        //}
      //  console.log(cart[i]);
    //}
    //var product = newProduct(name, price, count, image);
  //  cart.push(products);
//}
//)
// addProduct();

$('#newStuff').html(`<div>${cart[name]}</div>`);
function clearCart() {
    $(".btn btn-primary").click(function(){  
        cart.empty
    })
}
clearCart();

    $("#toys").click(function(event){
        $(".product").hide();
        $(".toys").show();   
    }) 

    $("#product").click(function(){
        $(".product").show();
        $(".toys").hide();   
    }) 

    $("#home").click(function(){
        $(".product").show();
        $(".toys").show();   
    }) 
$('newStuff').html(`<h1>${cart}</h1>`);



