import { getUniqueID } from "../lib/Shared/getUniqueID"
import { StopTask, type Task } from "./Task"
const statusTypes = ["IDLE", "TIMER_ACTIVE"] as const
export type TaskListStatus = typeof statusTypes[number]

export interface TaskListI {
  id: string
  name: string
  status: TaskListStatus
  tasks: Task[]
  looping: boolean
  timer: ReturnType<typeof setTimeout> | null
  isPlaying: boolean
}

export class TaskList implements TaskListI {
  id = getUniqueID()
  name: string
  tasks: Task[] = [new StopTask()]
  looping = false // ignore StopTask or not
  timer: ReturnType<typeof setTimeout> | null = null
  status: TaskListStatus = "IDLE"
  isPlaying: boolean = false
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

export let defaultTaskList: () => TaskList = () => new TaskList("Classic Pomo", [])