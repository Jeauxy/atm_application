//Begin with the document ready function
      $(document).ready(function() {
        document.body.style.backgroundColor = "red";
  //On click of the depositChecking button
      $("#depositChecking").click(function() {
        depositChecking();
      });
  //On click of the withdrawChecking button
      $("#withdrawChecking").click(function() {
        withdrawChecking();
      });
  //On click of the depositSavings button
      $("#depositSavings").click(function() {
        depositSavings();
      });
  //On click of the withdrawlSavings button
      $("#withdrawSavings").click(function() {
        withdrawSavings();
      });
});

  // var checkingBalance = 0;

//Checking account deposit function

  function depositChecking() {
    //Get value from the amountChecking input field
    var amount = $("#amountChecking").val();

    checkingBalance += amount;

    $("#checkingBalance").html("$" + amount);

};








        //Take that value and add it to the existing value in the checkingBalance div

//Checking account withdrawl funtion
  function withdrawChecking() {
    //Get value from the amountChecking input field
    var amount = $("#amountChecking").val();
    //Take that value and add it to the existing value in the checkingBalance div
    checkingBalance -= amount;

    if (amountChecking > checkingBalance) {
      return false;
    }else {
      checkingBalance - amountChecking;

      $(checkingBalance).val()
  }

};
        // If that value is greater than the value in the account ignore that action
        // In other words if this would put the account into a negative balance do not allow it

        //Else subtract that value from the current amount in the checking account

//Savings account deposit function
  function depositSavings() {
    //Get value from the amountSavings input field
    var amount = $("#amountSavings").val();
    //Take that value and add it to the existing value in the savingsBalance div
    savingsBalance += amount;

    $("#savingsBalance").html("$" + amount);

};

  //Take that value and add it to the existing value in the savingsBalance div



//Savings account withdraw funtion
  function withdrawSavings() {
    //Get value from the amountSavings input field
    var amount = $("#amountSavings").val();
    //Take that value and add it to the existing value in the checkingBalance div
    savingsBalance -= amount;

    if (amountSavings > savingsBalance) {
      return false;
    }else {
      savingsBalance - amountSavings;

      $(savingsBalance).val()
  }

};
         //If that value is greater than the value in the account ignore that action
         //In other words if this would put the account into a negative balance do not allow it

         //Else subtract that value from the current amount in the savings account

// Bonus-- get the two accounts to work with each other and allow for overdraft protection

// Double Bonus-- This isnt very DRY.  Using the keyword "this" see if you can make the withdraw and deposit functions work for both accounts
