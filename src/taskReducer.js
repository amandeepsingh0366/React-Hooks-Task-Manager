export function taskReducer(state, action) {
    switch (action.type) {
      case "ADD":
        return [...state, action.payload];
      case "DELETE":
        return state.filter((task) => task.id !== action.payload);
      case "TOGGLE":
        return state.map((task) =>
          task.id === action.payload ? { ...task, completed: !task.completed } : task
        );
      case "LOAD":
        return action.payload; // Handle the loaded tasks
      default:
        return state;
    }
  }
  