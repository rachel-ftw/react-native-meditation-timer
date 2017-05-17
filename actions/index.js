let nextTimerId = 0

export const addTimer = (time) => ({
  type: 'ADD_TIMER',
  id: nextTodoId ++,
  time
})
