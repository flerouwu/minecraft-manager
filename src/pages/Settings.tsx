import React, { useEffect, useState } from "react"

export default function Settings() {
  const [theme, setTheme] = useState<"system" | "light" | "dark">("system")

  useEffect(() => {
    setTheme((localStorage.getItem("theme") as typeof theme) ?? "system")
  }, [])

  return (
    <div className="p-4 h-screen w-full">
      <h1 className="text-xl font-semibold">Settings</h1>

      {/* Theme Selector */}
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">Theme Selector</span>
        </label>
        <select
          className="select select-bordered"
          onChange={(event) => {
            setTheme(event.currentTarget.value as typeof theme)
            localStorage.setItem("theme", event.currentTarget.value)
            document.dispatchEvent(new Event("themeChange"))
          }}
          value={theme}>
          <option value={"system"}>Follow System</option>
          <option value={"light"}>Light</option>
          <option value={"dark"}>Dark</option>
        </select>
      </div>
    </div>
  )
}
