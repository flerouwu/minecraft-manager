import { Icon, Folder, Server, Settings } from "react-feather"

export default function Sidebar() {
  return (
    <div className="flex flex-col justify-between w-16 h-full bg-base-200">
      <div className="w-16">
        <SidebarItem icon={Folder} text="Instances" href="/instances" />
        <SidebarItem icon={Server} text="Servers" href="/servers" />
      </div>
      <div className="w-16">
        <SidebarItem icon={Settings} text="Settings" href="/settings" />
      </div>
    </div>
  )
}

function SidebarItem(props: { icon: Icon; text: string; href: string }) {
  return (
    <a href={props.href} className="tooltip tooltip-right" data-tip={props.text}>
      <button className="btn btn-ghost flex flex-col items-center justify-center h-16 w-16">
        <props.icon />
      </button>
    </a>
  )
}
