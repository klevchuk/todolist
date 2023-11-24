import React, {useState} from 'react';
import './App.css';
import {Todolist} from "./Todolist";

let arr = [ []], ()

function App() {
    let tasks = [
        {id: 1, title: "HTML&CSS", isDone: true},
        {id: 2, title: "JS/TS", isDone: true},
        {id: 3, title: "React", isDone: false},
        {id: 4, title: "Redux", isDone: false}
    ]

    useState(tasks);

    function removeTask(id: number) {
        tasks = tasks.filter(t => t.id !== id)
    }


    return (
        <div className="App">
            <Todolist title="What to learn"
                      tasks={tasks}
                      removeTask={removeTask}
            />
        </div>
    );
}

export default App;
