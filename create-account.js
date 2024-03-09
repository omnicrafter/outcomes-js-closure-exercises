function createAccount(pin, amount = 0) {
  let balance = amount;
  let accountPin = pin;

  return {
    checkBalance: function (pin) {
      if (pin !== accountPin) {
        return "Invalid PIN.";
      }

      return `$${balance}`;
    },
    deposit: function (pin, amount) {
      if (pin !== accountPin) {
        return "Invalid PIN.";
      }
      if (typeof amount !== "number" || amount < 0) {
        return "Please enter a valid amount.";
      }
      balance = balance + amount;
      return `Successfully deposited $${amount}. Current balance: $${balance}.`;
    },
    withdraw: function (pin, amount) {
      if (pin !== accountPin) {
        return "Invalid PIN.";
      }
      if (typeof amount !== "number" || amount < 0) {
        return "Please enter a valid amount.";
      }

      if (balance - amount < 0) {
        return "Withdrawal amount exceeds account balance. Transaction cancelled.";
      }

      balance = balance - amount;
      return `Successfully withdrew $${amount}. Current balance: $${balance}.`;
    },
    changePin: function (pin, newPin) {
      if (pin !== accountPin) {
        return "Invalid PIN.";
      }

      accountPin = newPin;
      return "PIN successfully changed!";
    },
  };
}

module.exports = { createAccount };
