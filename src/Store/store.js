import { createStore } from 'redux'

const initialState = {
  toggleValue: localStorage.getItem('toggleValue') === 'true' || false,
  persistedState: null
}

const toggleReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'TOGGLE':
        const newValue = !state.toggleValue
        localStorage.setItem('toggleValue', newValue)
        return {
          ...state,
          toggleValue: newValue
        }
      case 'PERSIST_STATE':
        return {
          ...state,
          persistedState: action.payload
        }
      default:
        return state
    }
  }

const store = createStore(toggleReducer)

export default store
