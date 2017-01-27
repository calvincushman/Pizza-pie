$(document).ready(function() {
  //global variables
  var size;
  var crust;
  var sauce;
  var toppings;

  //constructor
  function Pizza(size, crust, sauce, toppings) {
    this.size =size;
    this.crust = crust;
    this.sauce = sauce;
    this.toppings = toppings;
  }
  $("#pizzaToOrder").click(function(event) {
    size =$("#sizeSelection").val();
    crust =$("input:radio[name=crust]:checked").val();
    var pizza = new Pizza(size, crust, sauce, toppings);
    console.log(pizza);
    event.preventDefault();
  });

});





 //pizza order function
