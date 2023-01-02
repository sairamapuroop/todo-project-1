import { configureStore, createSlice } from "@reduxjs/toolkit";

const todoItem = {
  items: [
    {
      id: 1,
      task: "first dummy task",
    },
    {
      id: 2,
      task: "second dummy task",
    },
  ],
};

const todoSlice = createSlice({
  name: "todo",
  initialState: todoItem,
  reducers: {
    addTodo(state, action) {
      const newItem = action.payload;

      state.items.push({
        id: newItem.id,
        task: newItem.task,
      });
    },
    removeTodo(state, action) {
      const id = action.payload;
      // const existingItem = state.items.find((item) => item.id === id);

      state.items = state.items.filter((item) => {
        return item.id !== id;
      });
    },
  },
});

const store = configureStore({
  reducer: {
    todo: todoSlice.reducer,
  },
});

export const todoActions = todoSlice.actions;

export default store;
