import path from 'path';
import fs from 'fs';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [
        react(),
        {
          name: 'mako-image-uploader',
          configureServer(server) {
            server.middlewares.use('/api/upload-media-image', (req, res) => {
              if (req.method === 'POST') {
                const chunks: any[] = [];
                req.on('data', chunk => chunks.push(chunk));
                req.on('end', () => {
                  try {
                    const body = JSON.parse(Buffer.concat(chunks).toString());
                    if (body.data) {
                      const base64Data = body.data.replace(/^data:image\/\w+;base64,/, '');
                      const buffer = Buffer.from(base64Data, 'base64');
                      const filename = body.filename || 'uploaded_image.jpg';
                      fs.writeFileSync(path.resolve(__dirname, `public/${filename}`), buffer);
                      fs.writeFileSync(path.resolve(__dirname, filename), buffer);
                      if (fs.existsSync(path.resolve(__dirname, 'dist'))) {
                        fs.writeFileSync(path.resolve(__dirname, `dist/${filename}`), buffer);
                      }
                      res.writeHead(200, { 'Content-Type': 'application/json' });
                      res.end(JSON.stringify({ success: true, path: `./${filename}` }));
                      return;
                    }
                  } catch (e: any) {
                    res.writeHead(500, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify({ error: e.message }));
                    return;
                  }
                  res.writeHead(400, { 'Content-Type': 'application/json' });
                  res.end(JSON.stringify({ error: 'No data provided' }));
                });
              } else {
                res.writeHead(405);
                res.end();
              }
            });
            server.middlewares.use('/api/upload-mako-image', (req, res) => {
              if (req.method === 'POST') {
                const chunks: any[] = [];
                req.on('data', chunk => chunks.push(chunk));
                req.on('end', () => {
                  try {
                    const body = JSON.parse(Buffer.concat(chunks).toString());
                    if (body.data) {
                      const base64Data = body.data.replace(/^data:image\/\w+;base64,/, '');
                      const buffer = Buffer.from(base64Data, 'base64');
                      fs.writeFileSync(path.resolve(__dirname, 'public/Shankar MAKO picture.JPG'), buffer);
                      fs.writeFileSync(path.resolve(__dirname, 'public/Shankar MAKO picture.jpg'), buffer);
                      fs.writeFileSync(path.resolve(__dirname, 'Shankar MAKO picture.JPG'), buffer);
                      if (fs.existsSync(path.resolve(__dirname, 'dist'))) {
                        fs.writeFileSync(path.resolve(__dirname, 'dist/Shankar MAKO picture.JPG'), buffer);
                      }
                      res.writeHead(200, { 'Content-Type': 'application/json' });
                      res.end(JSON.stringify({ success: true }));
                      return;
                    }
                  } catch (e: any) {
                    res.writeHead(500, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify({ error: e.message }));
                    return;
                  }
                  res.writeHead(400, { 'Content-Type': 'application/json' });
                  res.end(JSON.stringify({ error: 'No data provided' }));
                });
              } else {
                res.writeHead(405);
                res.end();
              }
            });
          }
        }
      ],
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      }
    };
});
