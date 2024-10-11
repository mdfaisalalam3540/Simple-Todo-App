
export function Todos({todos}) {

    return <div>
        {todos.map(function(todo) {
            return <div>
            <h2>{todo.title}</h2>
            <h4>{todo.description}</h4>
            <button>{todo.completed ? "completed" : "completed"}</button>
           </div>
        })}
    </div>

}

