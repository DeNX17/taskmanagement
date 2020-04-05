export const root = "/"
export const auth = "/auth"
export const tasks = "/tasks"
export const createTask = `${tasks}/create`


export function generateRoute(path: string) {
  if (process.env.NODE_ENV) {
    return `http://localhost:5000/${path}`
  }
  return path
} 