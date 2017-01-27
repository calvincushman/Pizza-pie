$(document).ready(function() {
  //global variables
  var size = 0;
  var toppings = 0;

  //constructor
  function Pizza(crust, sauce, topping, size) {
    this.crust = crust;
    this.sauce = sauce;
    this.size =size;
  }
  $("#pizzaToOrder").click(function(pizza) {
    $("form#sizeSelection").click(function(event) {
      var size = $("#sizeSelection").val();
    $("form#crustSelection")
      var crust =$("#crust").val();

      var pizza = new Pizza(size);
    })
    var pizza = new Pizza(size);
    console.log(pizza);
    event.preventDefault();
  });


});
 //pizza order function
