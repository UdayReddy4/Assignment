const bankAccount = require('./bank'); // Assuming the BankAccount class is in a separate file

describe('bankAccount', () => {
    let account;

    beforeEach(() => {
        account = new bankAccount(250);
    });

    it('should deposit money into the account', () => {
        account.deposit(50);
        expect(account.balance).toBe(300);
    });

    it('should withdraw money from the account', () => {
        account.withdraw(30);
        expect(account.balance).toBe(220);
    });

    it('should throw an error when withdrawing more than the balance', () => {
        expect(() => {
            account.withdraw(300);
        }).toThrow('Insufficient amount in Account.');
    });

    it('should throw an error when depositing a negative amount', () => {
        expect(() => {
            account.deposit(-50);
        }).toThrow('Deposit amount must be greater than zero.');
    });

    it('should throw an error when withdrawing a Zero amount', () => {
        expect(() => {
            account.withdraw(0);
        }).toThrow('Withdrawal amount must be greater than zero.');
    });
    it('should throw an error for negative withdrawal amount', () => {
        expect(() => {
            account.withdraw(-100);
        }).toThrow('invalied amount');
    });
});
