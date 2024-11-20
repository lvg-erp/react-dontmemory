import TodoItem from './TodoItem'
// import {ITodo} from '../types/data'
import { useAppSelector } from "../hooks";
// interface ITodoListProps{
//     items: ITodo[];
//     toggleTodo: (id: number) => void;
//     removeTodo: (id: number) => void;
//
// }

// const TodoList: React.FC<ITodoListProps> =(props) => {
//
//     const {items, toggleTodo, removeTodo} = props
//
//     return <div>
//         {
//             props.items.map(el=>
//                 <TodoItem
//                     key={el.id}
//                     toggleTodo={toggleTodo}
//                     removeTodo={removeTodo}
//                     {...el}/>)
//         }
//     </div>
// }
//
// export { TodoList }

const TodoList = () => {
    const todos = useAppSelector(state => state.todos.list)
    return (
        <ul>
            {todos.map((todo)=>(
               <TodoItem
                  key={todo.id}
                  {...todo}
               />
            ))}
        </ul>
    )

}

export default TodoList