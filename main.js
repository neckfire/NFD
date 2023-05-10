const { app, BrowserWindow } = require('electron')

const createWindow = () => {
  const win = new BrowserWindow({
    width: 1280,
    height: 720,
  })

  win.loadURL('http://localhost:1313/')

}

app.whenReady().then(() => {
  createWindow()
})


app.on('window-all-closed', () => {
  app.quit()
})