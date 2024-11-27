// todoReducer.ts
import { Todo } from './model'

// Define the action types
type TodoActionType = 
  | { type: 'ADD_TODO'; payload: string }
  | { type: 'DELETE_TODO'; payload: number }
  | { type: 'EDIT_TODO'; payload: { id: number; todo: string } }
  | { type: 'TOGGLE_TODO'; payload: number };

// Define the reducer function
const todoReducer = (state: Todo[], action: TodoActionType): Todo[] => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        { id: Date.now(), todo: action.payload, isDone: false },
      ];

    case 'DELETE_TODO':
      return state.filter(todo => todo.id !== action.payload);

    case 'EDIT_TODO':
      return state.map(todo =>
        todo.id === action.payload.id
          ? { ...todo, todo: action.payload.todo }
          : todo
      );

    case 'TOGGLE_TODO':
      return state.map(todo =>
        todo.id === action.payload ? { ...todo, isDone: !todo.isDone } : todo
      );

    default:
      return state;
  }
};

// Export the reducer function
export default todoReducer;
