$(function () {
  $('.summary').hide();
  $('.cdata-overlay').hide();

  $("#checkout").click(function () {
      let flavour = $(".flavour option:selected").val();
      let size = $("#size option:selected").val();
      let crust = $("#crust option:selected").val();
      let topping = $("#toppings option:selected").val();
      let number = $("#number").val();
      console.log(size);

      //Function order
      let order = (f, s, c, t, n, total) => {
          return {f, s, c, t, n, total};
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


// // proceed button
// $(document).ready(function(){

//   $('.div_1').slideDown(2000, function(){
//     $('.section').fadeIn(1000);
//     $('.harper').fadeIn(1000);
//     $('.btn_1').fadeIn(1000);
//   });

//   $('.btn_1').click(function(){
//     $('.div_1').slideUp(2500);
//     $('.box').fadeIn(4000);
//     $('.harper').fadeOut(2000);
//   }); 
//   var click = 1;
// $('.btn').click(function(){
// var images = ["url('images/pizza5.png')","url('images/pizza1.jpg)","url('images/pizzabg.jpg)",],
//     title = ["pizza-1" , "pizza-2", "pizza-3"],
//     main_course = ["1 burger 200g", "grills 250g","2 fish 100g"],
//     content_1 = ["1 medium fries", "1 salad", "lemode"],
//     content_2 = ["1 medium fries", "1 salad", "lemode"],
//     content_3 = ["1 medium fries", "1 salad", "lemode"],
//     price = ["105ksh", "1 salad", "500ks"];
//      if (click > images.lenght - 1){
//        click = 0;
//      }
//      $('.image').css$('background-image' , images[click]);
//      $('title').html('title[click]');
//      $('.main').html('main_course[click]');
//      $('.content_1').html('content_1[click]');
//      $('.content_2').html('content_2[click]');
//      $('.content_3').html('content_3[click]');
//      $('.price').html('price[click]');

//      click++;
// });
