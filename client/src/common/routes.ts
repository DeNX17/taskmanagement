export const root = "/"
export const auth = "/auth"
export const tasks = "/tasks"
export const labels = "/labels"
export const createTask = `${tasks}/create`
export const createLabel = `${labels}/create`

export function generateRoute(path: string) {
  if (process.env.NODE_ENV) {
    return `${path}`
  }
  return path
} 