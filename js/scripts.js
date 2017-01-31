  //pizza constructor
function Pizza(size, crust, sauce, toppings, cheese) {
  this.size =size;
  this.crust = crust;
  this.sauce = sauce;
  this.toppings = toppings;
  this.cheese = cheese;
};

function SelectElement(valueToSelect) {
  var element = document.getelementById('sizeSelection')
  element.value = valueToSelect;
};

$(document).ready(function() {
  $("#add-pizza").click(function(event) {
    var crust;
    var sauce;
    var toppings = [];
    var cheese = [];
    var size;

    size = $("#sizeSelection").val();
    crust = $("input:radio[name=crust]:checked").val();
    sauce = $("input:radio[name=sauce]:checked").val();

    $("input:checkbox[name=toppings]:checked").each(function() {
      var selectedTopping = $(this).val();
      toppings.push(selectedTopping);
    });

    $("input:checkbox[name=cheese]:checked").each(function() {
      var selectedCheese = $(this).val();
      cheese.push(selectedCheese);
    });

    var pizza = new Pizza(size, crust, sauce, toppings, cheese);

    var toppingsPrice = parseInt(toppings.length);
    var cheesePrice = parseInt(cheese.length);
    var sizePrice = parseInt(size);

    var pizzaPrice = (toppingsPrice+cheesePrice+sizePrice);

    if (sauce === undefined) {
      sauce = "no sauce"
    };

    if (crust === undefined) {
      alert("please select a crust");
    } else {
    $("ul#pizzasToOrder").append("Size: " + size + " inches" + "<br>" + "Crust: " + crust + "<br>" + "Sauce: " + sauce + "<br>" + "Cheese: " + cheese + "<br>" + "Toppings: " + toppings + "<br>" + "Price: $" + pizzaPrice + "<br>" + "<br>");
    };

    event.preventDefault();

  });
});
