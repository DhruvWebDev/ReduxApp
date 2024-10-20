const amountReducer = (state = 0, action) => {
    switch (action.type) {
        case "withdrawMoney":
            return state - action.payload;  // Withdraw amount

        case "depositMoney":
            return state + action.payload;  // Deposit amount

        default:
            return state;  // Return unchanged state if no matching action
 
    }
}

export default amountReducer;  // Default export
