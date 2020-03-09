import Cookies from "js-cookie";

export const withAuth = async (url: string, init?: RequestInit): Promise<any> => {
  const token = Cookies.get("token")

  const data = await (await fetch(url, {
    method: init?.method || "GET",
    mode: "cors",
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
      ...init?.headers
    },
    body: init?.body
  })).json()

  return data
}