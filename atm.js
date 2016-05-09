$(document).ready(function(){
 var checking = new transaction($("#checking"));
 console.log(checking);
 var savings  = new transaction($("#savings"));
});
function transaction(entry){
  var transaction = this;
  transaction.entry = entry;
  transaction.balance = 0;
  transaction.entries = {
    deposit: this.entry.find(".deposit"),
    withdraw: this.entry.find(".withdraw"),
    balance: this.entry.find(".balance"),
    input: this.entry.find(".input")
  }
this.entries.deposit.on('click', function (){
  var input = parseInt(transaction.entries.input.val());
  transaction.balance += input;
  transaction.entries.balance.html("$" + transaction.balance)

  console.log(transaction.balance)
})

this.entries.withdraw.on('click', function (){
  var input = parseInt(transaction.entries.input.val());
  transaction.balance -= input;
  transaction.entries.balance.html("$" + transaction.balance)

  console.log(transaction.balance)
})

};
