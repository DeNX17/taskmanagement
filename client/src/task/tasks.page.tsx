import React, { ReactElement, useState, useEffect } from 'react'
import { Task } from "./ui/task"
import { Link } from 'react-router-dom'
import { generateRoute } from '../common/routes'

export const TasksPage = (): ReactElement => {
  const [taskList, setTaskList] = useState([])

  useEffect((): void => {
    fetch(generateRoute("api/tasks")).then((res) => res.json()).then((res) => setTaskList(res))
  }, [])

  return (
    <div>
      <Link to="/tasks/create"><button>create task</button></Link>

      <div>
        {taskList.map((task: any): ReactElement => <Task key={task.id} {...task} />)}
      </div>
    </div>
  )
}