$(document).ready(function() {
  //global variables
  var size = 0;
  var toppings = 0;

  //constructor
  function Pizza(size, crust, sauce, topping) {
    this.crust = crust;
    this.sauce = sauce;
    this.size =size;
  }
  $("#pizzaToOrder").click(function(pizza) {
    $("form#sizeSelection").click(function(event) {
      var pizzSize = $("#sizeSelection").val();
    $("form#crustSelection")
      var crust =$("#crust").val();

      var pizza = new Pizza(size);
    })
    var pizza = new Pizza(pizzaSize);
    console.log(pizza);
    event.preventDefault();
  });


});
 //pizza order function
