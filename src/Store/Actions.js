export const TOGGLE = 'TOGGLE'
export const PERSIST_STATE = 'PERSIST_STATE'

export const toggle = () => ({
  type: TOGGLE
})

export const persistState = (state) => ({
  type: PERSIST_STATE,
  payload: state
})