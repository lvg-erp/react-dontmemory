import {configureStore} from "@reduxjs/toolkit";
import todoReducer from './todoSlice'

const store = configureStore({
    reducer: {
        todos: todoReducer
    },
})

export default store

//В данном хуке хранится информация о нашем компоненте
export type RootState = ReturnType<typeof store.getState>;
//В данном хуке хранится информация о событиях объекта
export type AppDispatch = typeof store.dispatch;