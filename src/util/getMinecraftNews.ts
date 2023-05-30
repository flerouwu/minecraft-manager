import { createLogger } from "./logger"

const logger = createLogger("getMinecraftNews", "#FFA500")

export async function getMinecraftNews(): Promise<NewsEntry[] | null> {
  logger("Fetching Minecraft news...")
  const res = await fetch("https://launchercontent.mojang.com/news.json", { mode: "cors" })
  const json = await res.json()
  logger(json)
  return json.entries
}

export interface NewsEntry {
  title: string
  tag: string
  category: string
  date: string
  text: string
  playPageImage: {
    title: string
    url: string
  }
  newsPageImage: {
    title: string
    url: string
    dimensions: {
      width: number
      height: number
    }
  }
  readMoreLink: string
  cardBorder: boolean
  newsType: string[]
  id: string
}
