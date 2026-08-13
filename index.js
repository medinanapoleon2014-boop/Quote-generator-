const { app, BrowserWindow } = require('electron');
const path = require('path');

// Set explicit AppUserModelID for Windows Taskbar icon support
app.setAppUserModelId("com.QuoteGenerator.app");

function createWindow() {
    const win = new BrowserWindow({
        width: 900,
        height: 700,
        title: "QuoteGenerator",
        icon: path.join(__dirname, 'assets/icons8-quote-96.ico'),
        webPreferences: {
            nodeIntegration: true
        }
    });

    win.loadFile('index.html');
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
});