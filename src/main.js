import { app, BrowserWindow, ipcMain } from 'electron';
import path from 'path';
import db from './database.js';

let mainWindow;

app.whenReady().then(() => {
  mainWindow = new BrowserWindow({
    webPreferences: {
      preload: path.join(path.dirname(), 'preload.js'), // IPC bridge
    },
  });

  mainWindow.loadURL('http://localhost:3000'); // or loadFile() for production
});

// Handle IPC calls
ipcMain.handle('get-users', () => {
  db.read();
  return db.data.users;
});

ipcMain.handle('add-user', (event, user) => {
  db.data.users.push(user);
  db.write();
  return { success: true };
});
