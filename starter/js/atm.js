//Begin with the document ready function
  $(document).ready(function() {
    document.body.style.backgroundColor = "red";
    $( "#depositChecking" ).click(function() {
    console.log( "Hello World" );
  });


});

var checkingBalance = 0;
var savingsBalance = 0;


    //Checking account deposit function
    function depositChecking() {

      var amount = parseInt(document.querySelector('#amountChecking').value);
      document.querySelector('#amountChecking').value = "";

      checkingBalance += amount;

      document.querySelector('#checkingBalance').html = "$" + checkingBalance;

      if (checkingBalance === 0) {
        document.querySelector('#checkingBalance').className = "balance";
      }
      else {
        document.querySelector('#checkingBalance').className = "balance";

      }
    }
      //On click of the depositChecking button






    //Get value from the amountChecking input field

        //Take that value and add it to the existing value in the checkingBalance div

    //Checking account withdrawl funtion



      //On click of the withdrawChecking button

        //Get value from the amountChecking input field

        // If that value is greater than the value in the account ignore that action
        // In other words if this would put the account into a negative balance do not allow it

        //Else subtract that value from the current amount in the checking account

    //Savings account deposit function

      //On click of the depositSavings button

        //Get value from the amountSavings input field

        //Take that value and add it to the existing value in the savingsBalance div

    //Savings account withdraw funtion

      //On click of the withdrawl button

        //Get value from the amountSavings input field

         //If that value is greater than the value in the account ignore that action
         //In other words if this would put the account into a negative balance do not allow it

         //Else subtract that value from the current amount in the savings account

// Bonus-- get the two accounts to work with each other and allow for overdraft protection

// Double Bonus-- This isnt very DRY.  Using the keyword "this" see if you can make the withdraw and deposit functions work for both accounts
