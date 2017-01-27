$(document).ready(function() {
  //global variables
  var size;
  var crust;
  var sauce;
  var selectedToppings;
  var toppings = [];
  var cheese = [];
  var price;

  //pizza constructor
  function Pizza(size, crust, sauce, toppings) {
    this.size =size;
    this.crust = crust;
    this.sauce = sauce;
    this.toppings = toppings;
    this.cheese = cheese;
  }

  //pizza building process
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

    var toppingPrice = 0;
    var cheesePrice = 0;

    toppings.forEach(function(topping) {
    toppingPrice += 1;
    console.log(toppingPrice);
    });
    cheese.forEach(function(cheese) {
    cheesePrice += 1;
    console.log(cheesePrice);

    event.preventDefault();
    });
  });

  if (size === tiny) {
    $()
  }


});
