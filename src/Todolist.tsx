import React, {FC} from "react";
import {FilterValuesType} from "./App";

export type TaskType = {
    id: number
    title: string
    isDone: boolean
}

type PropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (id: number) => void
    changeFilter: (value: FilterValuesType) => void
}

export const Todolist: FC<PropsType> = (props: PropsType) => {
    // const title = props.title   деструктуризация объекта
    // const tasks = props.tasks

    return (
        <div className="todolist">
            <h3>{props.title}</h3>
            <div>
                <input/>
                <button>+</button>
            </div>
            <ul>
                {
                    props.tasks.map( (t) => {
                        return <li>
                            <input type="checkbox" checked={t.isDone}/>
                            <span>{t.title}</span>
                            <button onClick={ () => { props.removeTask(t.id)} }>x</button>
                        </li>
                    })
                }
            </ul>
            <div>
                <button onClick={ () => props.changeFilter("all") }>All</button>
                <button onClick={ () => props.changeFilter("active") }>Active</button>
                <button onClick={ () => props.changeFilter("completed") }>Completed</button>
            </div>
        </div>
    )
}