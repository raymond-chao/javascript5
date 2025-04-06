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
