import electron, { app, BrowserWindow } from "electron"
import path from "node:path"
import url from "node:url"

// Window Creation
let mainWindow: BrowserWindow | null = null
const createWindow = () => {
  if (mainWindow) mainWindow.close()
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    minWidth: 800,
    minHeight: 600,
    webPreferences: { nodeIntegration: true, contextIsolation: false },
  })
  mainWindow.loadURL("http://localhost:3000")

  mainWindow.on("close", () => {
    mainWindow = null
  })

  mainWindow.webContents.setWindowOpenHandler(({ url }) => {
    electron.shell.openExternal(url)
    return { action: "deny" }
  })
}

// App Lifecycle
app.on("ready", createWindow)
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit()
})
app.on("activate", () => {
  if (mainWindow === null) createWindow()
})
