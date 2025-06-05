import { LowSync } from 'lowdb';
import { JSONFileSync } from 'lowdb/node';
import { join } from 'path';
import { app } from 'electron';

// Path to JSON file (use userData directory for safe read/write)
const dbFile = join(app.getPath('userData'), 'db.json');

// Adapter
const adapter = new JSONFileSync(dbFile);
const db = new LowSync(adapter);

db.read();

// Set default data if file is empty
db.data ||= { users: [] };
db.write();

export default db;
