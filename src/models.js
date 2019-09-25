export const money = {
  state: {
    income: 0,
    budgets: [null, null, null, null, null],
    savings: [null, null, null, null, null]
  },
  reducers: {
    addIncome: (state, income) => ({
      ...state, income: state.income + income
    })
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