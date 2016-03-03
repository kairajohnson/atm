$(document).ready(function(){
  var checking = new Account($("#checking"));
  var savings = new Account($("#savings"));
});

function Account(element){
  var account = this;
  account.element = element;
  account.balance = 0;
  account.elements = {
    deposit: account.element.find(".deposit"),
    withdraw: account.element.find(".withdraw"),
    balance: account.element.find(".balance"),
    input: account.element.find(".input")
  }

  account.elements.deposit.click(function(){
    var input = parseInt(account.elements.input.val());
    account.balance += input;
    account.elements.balance.text("$" + account.balance);
  });

  account.elements.withdraw.click(function(){
    var input = parseInt(account.elements.input.val());
    var newBalance = account.balance - input;
    if(newBalance > 0){
      account.balance = newBalance;
      account.elements.balance.text("$" + account.balance);
    }
  });
}
