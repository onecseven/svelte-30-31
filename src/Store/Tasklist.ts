import type { Moment } from "moment"
import { getUniqueID } from "../lib/Shared/getUniqueID"
import { StopTask, Task } from "./Task"
const statusTypes = ["IDLE", "TIMER_ACTIVE", "PAUSED", "DONE"] as const
export type TaskListStatus = typeof statusTypes[number]

export interface TaskListI {
  id: string
  name: string
  status: TaskListStatus
  tasks: Task[]
  looping: boolean
  timer: number | null
}

export class TaskList implements TaskListI {
  id = getUniqueID()
  name: string
  tasks: Task[] = [new StopTask()]
  looping = false // ignore StopTask or not
  timer: number | null = null
  status: TaskListStatus = "IDLE"
  constructor(_name: string, _tasks: Task[]) {
    this.name = _name
    this.tasks = [..._tasks.slice(), new StopTask()]
  }
}

// export let defaultTaskList: () => TaskList = () => {
//   return {
//     id: getUniqueID(),
//     name: "Classic Pomo",
//     status: "IDLE",
//     tasks: [],
//     looping: false,
//     timer: null,
//     isPlaying: false
//   }
// }

export let defaultTaskList: () => TaskList = () => new TaskList(`Pomodoro`, [new Task("Focused Work", 25),new Task("Short Break", 5),new Task("Focused Work", 25),new Task("Short Break", 5),new Task("Focused Work", 25),new Task("Long Break", 25)])