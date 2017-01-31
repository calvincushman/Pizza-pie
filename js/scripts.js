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

    var toppingsPrice = parseInt($(toppings.length)val());

    $("input:checkbox[name=cheese]:checked").each(function() {
      var selectedCheese = $(this).val();
      cheese.push(selectedCheese);
    });

    var cheesePrice = parseInt($(cheese.length).val());
    var sizePrice = parseInt($(size).val());

    var pizza = new Pizza(size, crust, sauce, toppings, cheese);
    console.log(pizza);
    console.log(toppingsPrice);
    console.log(cheesePrice);
    console.log(sizePrice);
    event.preventDefault();

  });
});
