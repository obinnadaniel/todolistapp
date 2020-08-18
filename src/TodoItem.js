import React from 'react';

function TodoItem(props) {
    return(
        <div className="todo-list">
         <input type="checkbox" checked={props.item.completed} />
         <p>{props.item.text}</p>

        </div>
    );
}

export default TodoItem;