import { createServer } from '@cloudflare/express-worker-adapter';
import app from './function/index.js'; // your existing Express app

export default {
  fetch: createServer(app)
};
