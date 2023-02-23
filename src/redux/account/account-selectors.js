const getAll = (state) => state.account.accounts
const isLoading = (state) => state.account.isLoading
const isError = (state) => state.account.isError
const isModalAddAccountOpen = (state) => state.account.isModalAddAccountOpen

export const selectorsAccount = {
  getAll,
  isLoading,
  isError,
  isModalAddAccountOpen
}