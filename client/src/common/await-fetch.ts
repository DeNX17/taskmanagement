import { generateRoute } from "./routes"

export const awaitFetch = async (url: string): Promise<any> => {
  const data = await (await (await fetch(generateRoute(url))).json())

  return data
}