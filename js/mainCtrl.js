var app = angular.module('quoteApp');
app.controller('MainController', function($scope, DataService){

  $scope.message = "Working";
  $scope.quote = '';
  $scope.quotes = [];
  $scope.isVisible = true;
  $scope.isAdd = false;

  function getQuotes() {
    $scope.quotes = DataService.getQuotes();
  }

  getQuotes();

  $scope.setQuote = function(quote) {
    if(quote.text && quote.author) {
      var status = DataService.setQuote(quote);
    } else {
      status = false;
    }
    if (status) {
      $scope.message = 'Quote added successfully';
    } else {
      $scope.message = 'Operation failed. Please input valid text and author content and try again';
    }
  }

  $scope.removeQuote = function(input){
    if(input) {
      var status = DataService.removeQuote(input);
    } else {
      status = false;
    }
    if (status) {
      $scope.message = 'Quote removed successfully';
    } else {
      $scope.message = 'Operation failed. Please try again';
    }
  }

});
