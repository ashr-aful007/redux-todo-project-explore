import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type TTodo ={
     id:string;
     title: string;
     description: string;
     isCompleted?: boolean;
}

type TInitialState = {
     todos: TTodo[]
}



const initialState: TInitialState ={
     todos: []
}



const todoSlice = createSlice({
     name: 'todo',
     initialState,
     reducers: {
          addTodo: (state, action: PayloadAction<TTodo>) =>{
               state.todos.push({...action.payload, isCompleted: false});
          },
          removeTodo: (state, action: PayloadAction<string>) =>{
             state.todos = state.todos.filter(item => item.id !== action.payload)
          },
          toggleComplete : (state, action: PayloadAction<string>) =>{
             const taskIndex = state.todos.findIndex(item => item.id === action.payload)
               state!.todos[taskIndex].isCompleted =!state.todos[taskIndex].isCompleted

               const completedTask = state.todos.splice(taskIndex, 1)[0];
               if(completedTask.isCompleted){
                    state.todos.unshift(completedTask)
               }
          }
     }
})

export const {addTodo, removeTodo, toggleComplete} = todoSlice.actions
export default todoSlice.reducer