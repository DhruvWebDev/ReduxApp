export const amountReducer = (state = 0, action) => {
    switch (action.type) {
        case  "withdrawMoney":
            return state + action.payload;

            case "depositMoney":
            return state - action.payload;
    
        default:
            state;
    }
}