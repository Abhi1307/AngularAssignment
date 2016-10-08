(function () {
'use strict';

angular.module('ShoppingListCheckOff',[])
.controller('ToBuyController',ToBuyController)
.controller('AlreadyBoughtController',AlreadyBoughtController)
.service('ShoppingListCheckOffService',ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService){
  var buy = this;
  buy.items = ShoppingListCheckOffService.getItemsToBuy();
  buy.justBought = function (itemIndex) {
    ShoppingListCheckOffService.boughtItem(itemIndex);
    buy.status = ShoppingListCheckOffService.everythingBought();
  };
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService){
  var bought = this;
  bought.items = ShoppingListCheckOffService.showBought();
  bought.status = ShoppingListCheckOffService.nothingBought;
}

function ShoppingListCheckOffService(){
  var service = this;

  var toBuy = [
    {
      name: "Milk",
      quantity: "3"
    },
    {
      name: "Donuts",
      quantity: "2"
    },
    {
      name: "Cookies",
      quantity: "6"
    },
    {
      name: "Chocolate",
      quantity: "5"
    },
    {
      name: "Pepto Bismol",
      quantity: "2"
    }
  ];
  var bought = [];

  var allBought = false;
  var nothingBought = false;
  service.getItemsToBuy = function(){
    return toBuy;
  };

  service.boughtItem = function (itemIndex) {
    bought.push(toBuy.splice(itemIndex,1)[0]);
  };

  service.showBought = function () {
    return bought;
  };

  service.nothingBought = function () {
    if(bought.length === 0){
      return true;
    }
  };

  service.everythingBought = function () {
    if(toBuy.length === 0){
      return true;
    }
  };
}
})();
