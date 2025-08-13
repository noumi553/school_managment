import { createServer } from '@cloudflare/express-worker-adapter';
import app from './app.js'; // your existing Express app

export default {
  fetch: createServer(app)
};
