$(document).ready(function() {
  //global variables
  var pizzaToOrder


  //pizza constructor
  function Pizza(size, crust, sauce, toppings, cheese) {
    this.size =size;
    this.crust = crust;
    this.sauce = sauce;
    this.toppings = toppings;
    this.cheese = cheese;
  };

  function Pizzaprice(sizePrice, cheesePrice, toppingPrice) {
    this.sizePrice =sizePrice;
    this.cheesePrice = cheesePrice;
    this.toppingPrice = toppingPrice;
  };

  //pizza building process
  $("#pizzaToOrder").click(function(event) {
    var crust;
    var sauce;
    var toppings = [];
    var toppingPrice;
    var cheese = [];
    var cheesePrice;
    var size;

    var pizza = new Pizza(size, crust, sauce, toppings, cheese);

    size = $("#sizeSelection").val();
    crust = $("input:radio[name=crust]:checked").val();
    sauce = $("input:radio[name=sauce]:checked").val();

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

    var pizza = new Pizza(size, crust, sauce, toppings, cheese);
    console.log(pizza);

    return pizza;
    $("#order-output").text(pizza);

    event.preventDefault();
  });

  //$("#order-output").text(result);
});
