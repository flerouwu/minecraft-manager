import React from "react"
import { Settings as SettingsIcon, Play as PlayIcon, Folder as FolderIcon } from "react-feather"
import { NewsEntry, getMinecraftNews } from "../util/getMinecraftNews"

export default function Home() {
  return (
    <div className="p-4 h-screen w-full">
      <h1 className="text-xl font-semibold">Welcome back!</h1>

      <div className="flex flex-row flex-grow">
        {/* Stats */}
        <div className="stats stats-vertical bg-base-200 shadow-md w-40">
          <div className="stat overflow-hidden px-3">
            <div className="stat-title">Playtime</div>
            <div className="stat-value">3,000</div>
            <div className="stat-desc">Hours</div>
          </div>

          <div className="stat overflow-hidden px-3">
            <div className="stat-title">Favourite Instance</div>
            <div className="stat-value">Developer</div>
            <div className="stat-desc">Running Fabric 1.19.4</div>
          </div>
        </div>

        {/* Recent Instances */}
        <div className="grid grid-rows-2 grid-cols-2 gap-2 ml-2">
          <InstanceCard name="Hypixel" />
          <InstanceCard name="SMP 1.19.4" />
          <InstanceCard name="Hardcore" />
          <InstanceCard name="Development" />
        </div>
      </div>

      {/* News */}
      <div className="">
        <News />
      </div>
    </div>
  )
}

function News() {
  const [entries, setEntries] = React.useState<NewsEntry[] | null>(null)

  React.useEffect(() => {
    getMinecraftNews().then((entries) => {
      setEntries(
        entries
          ?.filter((entry) => entry.playPageImage.url != null && entry.category === "Minecraft: Java Edition")
          .slice(0, 10) ?? null,
      )
    })
  }, [])

  if (entries == null) return <p>Loading...</p>
  else
    return (
      <div className="carousel">
        {entries.map((item, index) => (
          <div
            id={`news-carousel-${index}`}
            key={index}
            className="carousel-item overflow-hidden h-full w-full rounded-2xl mt-2 shadow-lg relative">
            <img src={`https://launchercontent.mojang.com${item.playPageImage.url}`} className="w-full object-cover" />

            <div className="absolute flex flex-row items-end justify-between w-full h-full p-4 bg-black bg-opacity-50">
              <div>
                <h4 className="text-xl font-bold text-white">{item.title}</h4>
                <h6 className="text-sm font-bold text-white">{item.text}</h6>
              </div>
              <a className="btn btn-primary btn-md" href={item.readMoreLink} target="_blank">
                Learn More
              </a>
            </div>
          </div>
        ))}
      </div>
    )
}

function InstanceCard(props: { name: string }) {
  return (
    <div className="card w-64 bg-base-200 shadow-xl image-full">
      <figure>
        <img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{props.name}</h2>
        <div className="card-actions justify-between flex flex-row-reverse">
          <button className="btn btn-primary">
            <PlayIcon />
          </button>
          <button className="btn btn-secondary">
            <FolderIcon />
          </button>
          <button className="btn btn-secondary">
            <SettingsIcon />
          </button>
        </div>
      </div>
    </div>
  )
}
