import process from 'node:process'
import { Buffer } from 'node:buffer'
import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

function devApiPlugin() {
  return {
    name: 'dev-api-plugin',
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        const url = req.url || '';
        if (url.startsWith('/api/Contact') || url.startsWith('/api/contact')) {
          try {
            // Load environment variables from .env into process.env
            const env = loadEnv('development', process.cwd(), '');
            Object.assign(process.env, env);

            // Read the incoming request body
            const chunks = [];
            for await (const chunk of req) {
              chunks.push(chunk);
            }
            const rawBody = Buffer.concat(chunks).toString('utf-8');
            let parsedBody = {};
            if (rawBody) {
              try {
                parsedBody = JSON.parse(rawBody);
              } catch {
                parsedBody = {};
              }
            }
            req.body = parsedBody;

            // Mock response methods expected by Vercel serverless functions
            res.status = function (statusCode) {
              this.statusCode = statusCode;
              return this;
            };
            res.json = function (data) {
              this.setHeader('Content-Type', 'application/json');
              this.end(JSON.stringify(data));
              return this;
            };

            const contactModule = await server.ssrLoadModule('/api/Contact.js');
            const handler = contactModule.default;
            await handler(req, res);
            return;
          } catch (err) {
            console.error('Local Dev API Error:', err);
            res.statusCode = 500;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ message: err.message || 'Internal Server Error' }));
            return;
          }
        }
        next();
      });
    },
  };
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), devApiPlugin()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('lucide-react')) {
              return 'icons';
            }
            return 'vendor';
          }
        },
      },
    },
  },
})

