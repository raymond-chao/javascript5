const account = {
    accountName: "John Doe",
    balance: 1000,

    getBalance: function () {
        alert("Your current balance is: " + this.balance);
    },

    deposit: function (amount) {
        this.balance += amount;
        alert("Deposit Successful! New Balance: " + this.balance);
    },

    withdrawal: function (amount) {
        if (amount > this.balance) {
            alert("Insufficient Balance!");
        } else {
            this.balance -= amount;
            alert("Withdrawal Successful! New Balance: " + this.balance);
        }
    },

    getAccountName: function () {
        alert("Account Name: " + this.accountName);
    },

    accountError: function () {
        alert("Account Error: Account not found!");
    }
};
function atm() {
    while (true) {
        const choice = parseInt(
            prompt(
                "Select a choice:\n1.) See balance\n2.) Make a deposit\n3.) Make a withdrawal\n4.) Get account name\n5.) Exit"
            )
        );

        switch (choice) {
            case 1:
                account.getBalance();
                break;
            case 2:
                const depositAmount = parseFloat(prompt("Enter amount to deposit:"));
                account.deposit(depositAmount);
                break;
            case 3:
                const withdrawalAmount = parseFloat(prompt("Enter amount to withdraw:"));
                account.withdrawal(withdrawalAmount);
                break;
            case 4:
                account.getAccountName();
                break;
            case 5:
                alert("Exiting ATM. Thank you!");
                return;
            default:
                account.accountError();
        }
    }
}

