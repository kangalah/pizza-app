// function getSizeCost() {
//     var selectedSize = document.getElementById("size").value;
//     return parseInt(selectedSize);
// }

// function getCrustCost() {
//     var selectedCrust = document.getElementById("crust").value;
//     return parseInt(selectedCrust);
// }
// function getNumber() {
//     var selectedNumber = document.getElementById("numberofpizza").value;
//     return parseInt(selectedNumber);
// }
// function mushrooms() {
//     var mushroom = 0;
//     var addMushroom = document.getElementById("toppingone");
//     if (addMushroom.checked === true) {
//         mushroom = 150;
//     }
//     return parseInt(mushroom);
// }

// function sausages() {
//     var sausage = 0;
//     var addsausage = document.getElementById("toppingone");
//     if (addsausage.checked === true) {
//         sausage = 140;
//     }
//     return parseInt(sausage);
// }
// function onions() {
//     var onion = 0;
//     var addonions = document.getElementById("toppingone");
//     if (addMushroom.checked === true) {
//         onion = 130;
//     }
//     return parseInt(onion);
// }
// function tikkaSaucee() {
//     var tikkaSauce = 0;
//     var addtikkaSauce = document.getElementById("toppingone");
//     if (addtikkaSauce.checked === true) {
//         tikkaSauce = 120;
//     }
//     return parseInt(tikkaSauce);
// }
// function mozarellaCheese() {
//     var cheese = 0;
//     var addmozarellaCheese = document.getElementById("toppingone");
//     if (addmozarellaCheese.checked === true) {
//         cheese = 110;
//     }
//     return parseInt(cheese);
// }

// function calctotalPrice(e) {
//     event.preventDefault();
//     var totalPrice = (getSizeCost() + getCrustCost() + mushrooms()) * (getNumber());
    
//         console.log(totalPrice);
//     alert("Your order of " + getNumber() + " pizzas has been processed.Your total amount payable is " + totalPrice +"." )

// }



// // Delivery form inputs and alerts



// $(document).ready(function () {
//     $("#delivery").submit(function () {

//         var name = $("input#name").val();
//         var number = $("input#number").val();
//         var location = $("input#location").val();

//         alert("Hello " + name + ". Your order has been successfuly received and will be delivered to " +  location + " within one hour.The delivery will cost ksh 180/= Thank you for chosing the pizzeria.");
//         // $(this).get(0).reset();
//         //  event.preventDefault();
//     });
    


 $(function () {
  $('.summary').hide();
  $('.cdata-overlay').hide();

  $("#checkout").click(function () {
      var flavour = $(".flavour option:selected").val();
      var size = $("#size option:selected").val();
      var crust = $("#crust option:selected").val();
      var topping = $("#toppings option:selected").val();
      var number = $("#number").val();
      console.log(size);

      //Function order
      var order = (f, s, c, t, n, total) => {
          return/ {f, s, c, t, n, total};
      };
// var price , crust_price, topping_price ;
// let total = 0;
// function Getpizza( name,size,crust,topping, total ){
//   this.name = name;
//   this.size = size;
//   this.crust = crust;
//   this.topping = topping;
//   this.total = total;
// }
let price, totalPrice;
        switch (flavour) {
            case flavour = "vegtikka":
                switch (size) {
                    case size = "regular":
                        price = 300;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 100;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 180;
                        } else {
                            totalPrice = (price * number) + 280;
                        }
                        break;
                        case size = "medium":
                        price = 600;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 100;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 180;
                        } else {
                            totalPrice = (price * number) + 280;
                        }
                        break;
                        break;
            case flavour = "chickentikka":
                switch (size) {
                    case size = "regular":
                        price = 300;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 100;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 180;
                        } else {
                            totalPrice = (price * number) + 280;
                        }
                        break;
                        case size = "medium":
                            price = 600;
                            if (crust === "thin") {
                                totalPrice = (price * number) + 100;
                            } else if (crust === "thick") {
                                totalPrice = (price * number) + 150;
                            } else if (crust === "flatbread") {
                                totalPrice = (price * number) + 180;
                            } else {
                                totalPrice = (price * number) + 280;
                            }
                            break;
                    case size = "large":
                        price = 1200;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 100;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 180;
                        } else {
                            totalPrice = (price * number) + 280;
                        }
                        break;
                }
                break;
            case flavour = "periperi":
                switch (size) {
                    case size = "regular":
                        price = 300;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 100;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 180;
                        } else {
                            totalPrice = (price * number) + 280;
                        }
                        break;
                    case size = "medium":
                        price = 600;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 100;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 180;
                        } else {
                            totalPrice = (price * number) + 280;
                        }
                        break;
                    case size = "large":
                        price = 1200;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 100;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 180;
                        } else {
                            totalPrice = (price * number) + 280;
                        }
                        break;
                }
                break;
            case flavour = "bbq":
                switch (size) {
                    case size = "regular":
                        price = 300;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 100;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 180;
                        } else {
                            totalPrice = (price * number) + 280;
                        }
                        break;
                    case size = "medium":
                        price = 600;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 100;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 180;
                        } else {
                            totalPrice = (price * number) + 280;
                        }
                        break;
                        case size = "large":
                          price = 1200;
                          if (crust === "thin") {
                              totalPrice = (price * number) + 100;
                          } else if (crust === "thick") {
                              totalPrice = (price * number) + 150;
                          } else if (crust === "flatbread") {
                              totalPrice = (price * number) + 180;
                          } else {
                              totalPrice = (price * number) + 280;
                          }
                          break;
                  }
                  break;
              case flavour = "boerewors":
                  switch (size) {
                      case size = "regular":
                          price = 300;
                          if (crust === "thin") {
                              totalPrice = (price * number) + 100;
                          } else if (crust === "thick") {
                              totalPrice = (price * number) + 150;
                          } else if (crust === "flatbread") {
                              totalPrice = (price * number) + 180;
                          } else {
                              totalPrice = (price * number) + 280;
                          }
                          break;
                      case size = "medium":
                          price = 600;
                          if (crust === "thin") {
                              totalPrice = (price * number) + 100;
                          } else if (crust === "thick") {
                              totalPrice = (price * number) + 150;
                          } else if (crust === "flatbread") {
                              totalPrice = (price * number) + 180;
                          } else {
                              totalPrice = (price * number) + 280;
                          }
                          break;
                      case size = "large":
                          price = 1200;
                          if (crust === "thin") {
                              totalPrice = (price * number) + 100;
                          } else if (crust === "thick") {
                              totalPrice = (price * number) + 150;
                          } else if (crust === "flatbread") {
                              totalPrice = (price * number) + 180;
                          } else {
                              totalPrice = (price * number) + 280;
                          }
                          break;
                  }
                  break;
              case flavour = "hawaiian":
                  switch (size) {
                      case size = "regular":
                          price = 300;
                          if (crust === "thin") {
                              totalPrice = (price * number) + 100;
                          } else if (crust === "thick") {
                              totalPrice = (price * number) + 150;
                          } else if (crust === "flatbread") {
                              totalPrice = (price * number) + 180;
                          } else {
                              totalPrice = (price * number) + 280;
                          }
                          break;
                      case size = "medium":
                          price = 600;
                          if (crust === "thin") {
                              totalPrice = (price * number) + 100;
                          } else if (crust === "thick") {
                              totalPrice = (price * number) + 150;
                          } else if (crust === "flatbread") {
                              totalPrice = (price * number) + 180;
                          } else {
                              totalPrice = (price * number) + 280;
                          }
                          break;
                      case size = "large":
                          price = 1200;
                          if (crust === "thin") {
                              totalPrice = (price * number) + 100;
                          } else if (crust === "thick") {
                              totalPrice = (price * number) + 150;
                          } else if (crust === "flatbread") {
                              totalPrice = (price * number) + 180;
                          } else {
                              totalPrice = (price * number) + 280;
                          }
                          break;
                  }
                  break;
              case flavour = "mushroom":
                  switch (size) {
                      case size = "regular":
                          price = 300;
                          if (crust === "thin") {
                              totalPrice = (price * number) + 100;
                          } else if (crust === "thick") {
                              totalPrice = (price * number) + 150;
                          } else if (crust === "flatbread") {
                              totalPrice = (price * number) + 180;
                          } else {
                              totalPrice = (price * number) + 280;
                          }
                          break;
                      case size = "medium":
                          price = 600;
                          if (crust === "thin") {
                              totalPrice = (price * number) + 100;
                          } else if (crust === "thick") {
                              totalPrice = (price * number) + 150;
                          } else if (crust === "flatbread") {
                              totalPrice = (price * number) + 180;
                          } else {
                              totalPrice = (price * number) + 280;
                          }
                          break;
                      case size = "large":
                          price = 1200;
                          if (crust === "thin") {
                              totalPrice = (price * number) + 100;
                          } else if (crust === "thick") {
                              totalPrice = (price * number) + 150;
                          } else if (crust === "flatbread") {
                              totalPrice = (price * number) + 180;
                          } else {
                              totalPrice = (price * number) + 280;
                          }
                          break;
                  }
                  break;
              case flavour = "regina":
                  switch (size) {
                      case size = "regular":
                          price = 300;
                          if (crust === "thin") {
                              totalPrice = (price * number) + 100;
                          } else if (crust === "thick") {
                              totalPrice = (price * number) + 150;
                          } else if (crust === "flatbread") {
                              totalPrice = (price * number) + 180;
                          } else {
                              totalPrice = (price * number) + 280;
                          }
                          break;
                      case size = "medium":
                          price = 600;
                          if (crust === "thin") {
                              totalPrice = (price * number) + 100;
                          } else if (crust === "thick") {
                              totalPrice = (price * number) + 150;
                          } else if (crust === "flatbread") {
                              totalPrice = (price * number) + 180;
                          } else {
                              totalPrice = (price * number) + 280;
                          }
                          break;
                      case size = "large":
                          price = 1200;
                          if (crust === "thin") {
                              totalPrice = (price * number) + 100;
                          } else if (crust === "thick") {
                              totalPrice = (price * number) + 150;
                          } else if (crust === "flatbread") {
                              totalPrice = (price * number) + 180;
                          } else {
                              totalPrice = (price * number) + 280;
                          }
                          break;
                  }
                  break;
          }
          switch (topping) {
              case topping = "tomato":
                  totalPrice = totalPrice + 80;
                  break;
              case topping = "onions":
                  totalPrice = totalPrice + 80;
                  break;
              case topping = "mushroom":
                  totalPrice = totalPrice + 80;
                  break;
              case topping = "greenpepper":
                  totalPrice = totalPrice + 80;
                  break;
              case topping = "olives":
                  totalPrice = totalPrice + 120;
                  break;
              case topping = "pineapple":
                  totalPrice = totalPrice + 120;
                  break;
              case topping = "sweetcorn":
                  totalPrice = totalPrice + 120;
                  break;
              case topping = "macon":
                  totalPrice = totalPrice + 120;
                  break;
              case topping = "mince":
                  totalPrice = totalPrice + 120;
                  break;
              case topping = "beef":
                  totalPrice = totalPrice + 170;
                  break;
              case topping = "chicken":
                  totalPrice = totalPrice + 170;
                  break;
  
          }
  
          //Execute order function
          let newOrder = order(flavour, size, crust, topping, number, totalPrice);
          console.log(newOrder); // test func
  
          //create a new object
          // let myOrder = JSON.stringify(JSON.parse(newOrder));
  
          //Write to the order
          $('.summary').slideDown(2000);
          $('.cdata-overlay').slideUp();
          $('#list').slideDown();
          $('.deliver').show(1000);
          $('.delivernot').show(1000);
  
          $('#list').text(" ");
          $("#list").append("<br>" + "Flavour :   " + newOrder.f + "<br>" + "Size :   "
              + newOrder.s + "<br>" + "Crust :     "
              + newOrder.c + "<br>" + "Toppings :     "
              + newOrder.t + "<br>" + " Number of pizzas :    "
              + newOrder.n + "<br>" + "Total Price :  "
              + newOrder.total + "<br><br>").css('font-family', 'system-ui').css('font-size', '24px');
      });
  
      
      $(".deliver").click(function () {
          $('.summary').slideUp();
          $('#list').slideUp();
          $('.summary').text("Provide location details").slideDown();
          $('.deliver').hide(1000);
          $('.delivernot').hide(1000);
          $('.cdata-overlay').slideDown();
      });
  
  
      //Pick Up
      $(".delivernot").click(function () {
  
      });
  
      //Scrollify
      $(function () {
          $.scrollify.move('#sum-order');
      });
  });
  

    

// proceed button
$(document).ready(function(){

  $('.div_1').slideDown(2000, function(){
    $('.section').fadeIn(1000);
    $('.harper').fadeIn(1000);
    $('.btn_1').fadeIn(1000);
  });

  $('.btn_1').click(function(){
    $('.div_1').slideUp(2500);
    $('.box').fadeIn(4000);
    $('.harper').fadeOut(2000);
  }); 
  var click = 1;
$('.btn').click(function(){
var images = ["url('images/pizza5.png')","url('images/pizza1.jpg)","url('images/pizzabg.jpg)",],
    title = ["pizza-1" , "pizza-2", "pizza-3"],
    main_course = ["1 burger 200g", "grills 250g","2 fish 100g"],
    content_1 = ["1 medium fries", "1 salad", "lemode"],
    content_2 = ["1 medium fries", "1 salad", "lemode"],
    content_3 = ["1 medium fries", "1 salad", "lemode"],
    price = ["105ksh", "1 salad", "500ks"];
     if (click > images.lenght - 1){
       click = 0;
     }
     $('.image').css$('background-image' , images[click]);
     $('title').html('title[click]');
     $('.main').html('main_course[click]');
     $('.content_1').html('content_1[click]');
     $('.content_2').html('content_2[click]');
     $('.content_3').html('content_3[click]');
     $('.price').html('price[click]');

     click++;
});
});