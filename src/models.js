export const money = {
  state: {
    income: 0,
    budgets: [],
    savings: [],
  },
  reducers: {
    addBudget: state => {
      if (state.budgetsIndex === 5) return state;
      let budgets = [...state.budgets];
      budgets.push(0);

      return {
        ...state,
        budgets: budgets,
      }
    },
    removeBudget: (state, idx) => {
      if (state.budgetsIndex === 0) return state;
      let budgets = [...state.budgets];
      budgets.splice(idx, 1)

      return {
        ...state,
        budgets: budgets,
      }
    },
    updateBudget: (state, index, amount) => {
      let budget = [...state.budget];
      budget[index] += amount;
      return {...state, budget: budget}
    },
    addSaving: state => {
      if (state.savingsIndex === 5) return state;
      let savings = [...state.savings];
      savings.push(0);

      return {
        ...state,
        savingsIndex: state.savingsIndex + 1,
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