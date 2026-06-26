// Terraza More Twins — servidor estático
// Sirve el sitio desde la carpeta /public
import express from "express";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = process.env.PORT || 3000;

// Archivos estáticos (HTML, imágenes, etc.)
app.use(express.static(join(__dirname, "public")));

// Fallback: cualquier ruta sirve el index (single-page)
app.get("*", (_req, res) => {
  res.sendFile(join(__dirname, "public", "index.html"));
});

app.listen(PORT, () => {
  console.log(`\n  Terraza More Twins corriendo en  http://localhost:${PORT}\n`);
});
