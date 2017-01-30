$(document).ready(function() {
  //global variables
  var pizzaToOrder


  //pizza constructor
  function Pizza(size, crust, sauce, toppings) {
    this.size =size;
    this.crust = crust;
    this.sauce = sauce;
    this.toppings = toppings;
    this.cheese = cheese;
  }

  $("input:checkbox[name=toppings]:checked").each(function() {
    var selectedToppings = $(this).val();
    toppings.push(selectedToppings);

    toppings.forEach(function(topping) {
    toppingPrice += 1;
    console.log(toppingPrice);

    });
  });

  $("input:checkbox[name=cheese]:checked").each(function() {
    var selectedCheese = $(this).val();
    cheese.push(selectedCheese);

    cheese.forEach(function(cheese) {
    cheesePrice += 1;
    console.log(cheesePrice);

    });
  });

  function Pizzaprice(sizePrice, cheesePrice, toppingPrice) {
    this.sizePrice =sizePrice;
    this.cheesePrice = cheesePrice;
    this.toppingPrice = toppingPrice;

  if (size = "Tiny") {
    size === 7;
  }

  //pizza building process
  $("#pizzaToOrder").click(function(event) {
    var crust;
    var sauce;
    var toppings = [];
    var cheese = [];
    var size;

    size = $("#sizeSelection").val();
    crust = $("input:radio[name=crust]:checked").val();
    sauce = $("input:radio[name=sauce]:checked").val();

    var pizza = new Pizza(size, crust, sauce, cheese, toppings);
    console.log(pizza);

    toppings.forEach(function(topping) {
    toppingPrice += 1;
    console.log(toppingPrice);

    });

    cheese.forEach(function(cheese) {
    cheesePrice += 1;
    console.log(cheesePrice);

    });

    size.

    event.preventDefault();
  });

  return pizza;



});
