$(document).ready(function() {
  //global variables
  var size;
  var crust;
  var sauce;
  var selectedToppings;
  var toppings = [];
  var cheese = [];
  //constructor
  function Pizza(size, crust, sauce, toppings) {
    this.size =size;
    this.crust = crust;
    this.sauce = sauce;
    this.toppings = toppings;
    this.cheese = cheese;
  }
  $("#pizzaToOrder").click(function(event) {
    size = $("#sizeSelection").val();
    crust = $("input:radio[name=crust]:checked").val();
    sauce = $("input:radio[name=sauce]:checked").val();

    $("input:checkbox[name=toppings]:checked").each(function() {
      var selectedToppings = $(this).val();
      toppings.push(selectedToppings);

    });
    $("input:checkbox[name=cheese]:checked").each(function() {
      var selectedCheese = $(this).val();
      cheese.push(selectedCheese);

    });
    var pizza = new Pizza(size, crust, sauce, cheese, toppings);
    console.log(pizza);
    event.preventDefault();
  });

});





 //pizza order function
