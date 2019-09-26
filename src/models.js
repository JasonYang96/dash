export const money = {
  state: {
    income: 0,
    budgets: [],
    savings: [],
  },
  reducers: {
    addBudget: state => {
      let budgets = [...state.budgets];
      budgets.push({
        amount: 0,
        name: "Budget Name",
      });

      return {
        ...state,
        budgets: budgets,
      }
    },
    deleteBudget: (state, idx) => {
      let budgets = [...state.budgets];
      budgets.splice(idx, 1)

      return {
        ...state,
        budgets: budgets,
      }
    },
    updateBudgetName: (state, index, name) => {
      let budgets = [...state.budgets];
      budgets[index].name = name;

      return {...state, budgets: budgets}
    },
    addBudgetAmount: (state, index, amount) => {
      let budgets = [...state.budgets];
      let income = state.income;
      budgets[index].amount += amount;
      income -= amount;

      return {...state, budgets: budgets, income: income}
    },
    updateSavingName: (state, index, name) => {
      let savings = [...state.savings];
      savings[index].name = name;

      return {...state, savings: savings}
    },
    deleteSaving: (state, idx) => {
      let savings = [...state.savings];
      savings.splice(idx, 1)

      return {
        ...state,
        savings: savings,
      }
    },
    addSaving: state => {
      let savings = [...state.savings];
      savings.push({
        amount: 0,
        name: "Savings Goal",
      });
      console.log(savings);
      return {
        ...state,
        savings: savings,
      }
    },
    addIncome: (state, income) => ({
      ...state, income: state.income + income
    }),
  },
  effects: (dispatch) => ({
    // handle state changes with impure functions.
    // use async/await for async actions
    async incrementAsync(payload, rootState) {
      await new Promise(resolve => setTimeout(resolve, 1000))
      dispatch.count.increment(payload)
    }
  })
}