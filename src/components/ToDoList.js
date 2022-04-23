import React from 'react'

const ToDoList = (props) => {
    //     const todolist =[
    //         {
    //             task: "shower",
    //         },
    //         {
    //             task: "cook",
    //         },
    //         {
    //             task: "eat",
    //         }
    // ]
    console.log(props.items)
    return (
        <table className='table table-striped'>
            <tbody>
                {props.items.map((todo) => {
                    return (
                        <tr>
                            <td>
                                <input className="form-check-input me-1" type="checkbox" value={todo.task} id="flexCheckDefault" key={todo.task} />
                                <label className="form-check-label" for="flexCheckDefault">
                                    {todo.task}
                                </label>
                            </td>
                        </tr>
                    )
                    // <input className="form-check-input" type="checkbox" value={todo.task} id="flexCheckDefault"
                    //     key={todo.task} />
                    // <label className="form-check-label" for="flexCheckDefault">
                    //     Default checkbox
                    //   </label>
                })}
            </tbody>



        </table>
    )
}

export default ToDoList