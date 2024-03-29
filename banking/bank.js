class bankAccount {
    constructor(balance = 0) {
        this.balance = balance;
    }

    deposit(amount) {
        if (amount >= 0) {
            this.balance += amount;
        console.log(`Successfully deposited $${amount}.`);
        }else{
            throw new Error("Deposit amount must be greater than zero.");
        }
        
    }

    withdraw(amount) {
        if (amount > 0) {
            if (amount <= this.balance) {
                this.balance -= amount;
                console.log(`Successfully withdrew $${amount}.`);
            } else {
                throw new Error("Insufficient amount in Account.");
            }
        }else if (amount === 0) {
            throw new Error("Withdrawal amount must be greater than zero.");
        }  else {
            throw new Error("invalied amount");
        }
    }


    checkBalance() {
        console.log('Your current balance is ' + this.balance);
    }
}

// const account = new bankAccount(100);

// try {
//     account.deposit(50);
//     account.checkBalance();
//     account.withdraw(30);
//     account.checkBalance();
//     account.withdraw(1340); 
//     account.checkBalance();
// } catch (error) {
//     console.error("Error:", error.message);
// }


module.exports =bankAccount