import { useAppDispatch } from "../hooks";
// import {ITodo} from '../types/data'
import React from "react";
import {removeTodo, toggleComplete} from "../store/todoSlice";

// interface ITodoItem extends ITodo {
//     removeTodo: (id: number)=> void
//     toggleTodo: (id: number)=> void
// }
interface TodoItemProps {
    id: string,
    title: string,
    completed: boolean
}

const TodoItem: React.FC<TodoItemProps> = ({id, title, completed}) => {
    const dispatch = useAppDispatch()

    return (
        <li>
            <input
                type='checkbox'
                checked={completed}
                onChange={()=> dispatch(toggleComplete(id))}
            />
            <span>{title}</span>
            <span onClick={()=> dispatch(removeTodo(id))}>&times;</span>
        </li>
    )
}

// const TodoItem: React.FC<ITodoItem> =(props)=> {
//     const {id, title, complete, removeTodo, toggleTodo} = props
//     return <div>
//         <input type="checkbox" checked={complete} onChange={()=>toggleTodo(id)}/>
//         <span style={{display: 'inline-block', margin: '0 10px'}}>
//             {title}
//         </span>
//         <button onClick={()=>removeTodo(id)}
//             style={{
//                 background: 'transparent',
//                 border: "none",
//                 outline: "none",
//                 color: "red"
//             }}
//         >
//             x
//         </button>
//     </div>
// }
//
// export { TodoItem }

export default TodoItem