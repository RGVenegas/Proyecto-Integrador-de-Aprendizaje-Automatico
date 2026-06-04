const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');
const { marked } = require('marked');

// Paths
const mdPath = path.join(__dirname, 'informe_tecnico(Hito1).md');
const htmlPath = path.join(__dirname, 'temp.html');
const pdfPath = path.join(__dirname, 'informe_tecnico(Hito1).pdf');

// Read Markdown
if (!fs.existsSync(mdPath)) {
    console.error(`Error: No se encontró el archivo ${mdPath}`);
    process.exit(1);
}

const markdownContent = fs.readFileSync(mdPath, 'utf8');

// Split by horizontal rules "---"
// The markdown has "---" on lines by themselves.
const parts = markdownContent.split(/\r?\n---\r?\n/);

console.log(`El documento se dividió en ${parts.length} partes.`);

let coverMetaHtml = '';
let mainContentMarkdown = '';

if (parts.length >= 2) {
    // Part 1 is the control de versiones
    coverMetaHtml = marked.parse(parts[1].trim());
    
    // Join the rest with standard <hr> rules
    mainContentMarkdown = parts.slice(2).join('\n\n<hr>\n\n');
} else {
    // Fallback if formatting is different
    mainContentMarkdown = markdownContent;
}

const mainContentHtml = marked.parse(mainContentMarkdown);

// Beautiful premium HTML template
const htmlTemplate = `<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<title>Informe Técnico - Hito 1</title>
<style>
  @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400;1,600&display=swap');
  
  :root {
    --primary: #1e3a8a;       /* Deep Slate Blue */
    --primary-light: #2563eb; /* Royal Blue */
    --accent: #06b6d4;        /* Cyan Accent */
    --text-primary: #0f172a;  /* Slate 900 */
    --text-secondary: #334155;/* Slate 700 */
    --text-muted: #64748b;    /* Slate 500 */
    --bg-light: #f8fafc;      /* Slate 50 */
    --border-color: #e2e8f0;  /* Slate 200 */
  }

  @page {
    size: A4;
    margin: 2.5cm 2cm 2.5cm 2cm;
  }

  * {
    box-sizing: border-box;
  }

  body {
    font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
    color: var(--text-primary);
    line-height: 1.65;
    margin: 0;
    padding: 0;
    background-color: #ffffff;
    font-size: 11pt;
  }

  /* Cover Page Styling */
  .cover-page {
    height: 23.5cm; /* Standard height for A4 printable area with 2.5cm vertical margins */
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    page-break-after: always;
    box-sizing: border-box;
  }

  .cover-header {
    border-left: 6px solid var(--primary-light);
    padding-left: 24px;
    margin-top: 4cm;
  }

  .cover-title {
    font-family: 'Outfit', sans-serif;
    font-size: 28pt;
    font-weight: 800;
    line-height: 1.2;
    color: var(--primary);
    margin: 0 0 16px 0;
    letter-spacing: -0.02em;
  }

  .cover-subtitle {
    font-family: 'Outfit', sans-serif;
    font-size: 16pt;
    font-weight: 400;
    color: var(--text-secondary);
    margin: 0;
    line-height: 1.4;
  }

  .cover-divider {
    height: 4px;
    width: 120px;
    background: linear-gradient(90deg, var(--primary-light), var(--accent));
    margin-top: 30px;
    border-radius: 2px;
  }

  .cover-meta {
    margin-bottom: 2cm;
    background-color: var(--bg-light);
    padding: 20px 24px;
    border-radius: 8px;
    border: 1px solid var(--border-color);
  }

  .cover-meta h3 {
    font-family: 'Outfit', sans-serif;
    font-size: 11pt;
    color: var(--primary);
    margin-top: 0;
    margin-bottom: 12px;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    font-weight: 700;
  }

  .cover-meta table {
    margin: 0;
    width: 100%;
  }

  /* Content Styling */
  .content-container {
    padding-top: 0.5cm;
  }

  h1, h2, h3, h4 {
    font-family: 'Outfit', sans-serif;
    color: var(--primary);
    margin-top: 1.8em;
    margin-bottom: 0.6em;
    font-weight: 700;
    page-break-after: avoid;
    letter-spacing: -0.01em;
  }

  h1 {
    font-size: 20pt;
    border-bottom: 2px solid var(--border-color);
    padding-bottom: 8px;
    margin-top: 0;
  }

  h2 {
    font-size: 15pt;
    color: var(--text-primary);
    font-weight: 600;
    margin-top: 1.6em;
  }

  h3 {
    font-size: 12.5pt;
    color: var(--primary-light);
    font-weight: 600;
    border-bottom: 1px solid var(--border-color);
    padding-bottom: 4px;
    margin-top: 1.5em;
  }

  p {
    margin-bottom: 1.2em;
    text-align: justify;
    color: var(--text-secondary);
  }

  strong {
    color: var(--text-primary);
    font-weight: 700;
  }

  /* Lists */
  ul, ol {
    margin-bottom: 1.2em;
    padding-left: 24px;
    color: var(--text-secondary);
  }

  li {
    margin-bottom: 0.6em;
  }

  li::marker {
    color: var(--primary-light);
    font-weight: bold;
  }

  /* Nested list spacing */
  ul ul, ol ol, ul ol, ol ul {
    margin-top: 0.4em;
    margin-bottom: 0.4em;
  }

  /* Tables */
  table {
    width: 100%;
    border-collapse: collapse;
    margin: 24px 0;
    font-size: 10pt;
    page-break-inside: avoid;
  }

  th, td {
    border: 1px solid var(--border-color);
    padding: 10px 14px;
    text-align: left;
    vertical-align: top;
  }

  th {
    background-color: var(--bg-light);
    color: var(--primary);
    font-weight: 700;
  }

  tr:nth-child(even) {
    background-color: #fafbfc;
  }

  hr {
    border: 0;
    height: 1px;
    background: var(--border-color);
    margin: 35px 0;
    page-break-inside: avoid;
  }

  .page-break {
    page-break-before: always;
  }

  /* Custom styling for specific parts */
  /* Bulleted items with bold titles look nicer */
  li > strong:first-child {
    color: var(--primary);
  }
</style>
</head>
<body>

<div class="cover-page">
  <div class="cover-header">
    <h1 class="cover-title">Informe Técnico</h1>
    <h2 class="cover-subtitle">Proyecto Integrador de Aprendizaje Automático<br><span style="font-size: 13pt; font-weight:300; color:var(--text-muted); display:inline-block; margin-top:8px;">Visión Artificial para Seguridad, Logística y Operaciones Inteligentes</span></h2>
    <div class="cover-divider"></div>
  </div>
  
  <div class="cover-meta">
    <h3>Información del Documento</h3>
    ${coverMetaHtml}
  </div>
</div>

<div class="content-container">
  ${mainContentHtml}
</div>

</body>
</html>`;

// Write temporary HTML
fs.writeFileSync(htmlPath, htmlTemplate, 'utf8');
console.log('HTML temporal generado correctamente.');

// Microsoft Edge executable path
const edgePath = '"C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe"';

// Run headless print to PDF
// Using double quotes for Windows cmd shell compatibility
const command = `${edgePath} --headless --disable-gpu --print-to-pdf="${pdfPath}" --no-pdf-header-footer "${htmlPath}"`;

console.log('Ejecutando conversión a PDF con Microsoft Edge...');

exec(command, (error, stdout, stderr) => {
    if (error) {
        console.error(`Error durante la conversión: ${error.message}`);
        return;
    }
    
    console.log('PDF generado exitosamente.');
    
    // Clean up temporary HTML file
    try {
        fs.unlinkSync(htmlPath);
        console.log('Archivo HTML temporal eliminado.');
    } catch (cleanupError) {
        console.warn(`No se pudo eliminar el archivo temporal HTML: ${cleanupError.message}`);
    }
});
