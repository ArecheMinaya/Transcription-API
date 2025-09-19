# Transcription-API - Ejemplos de File System y Transcripción de Audio

Este proyecto contiene ejemplos de operaciones del sistema de archivos de Node.js y transcripción de audio utilizando las APIs de OpenAI y Deepgram.

## 📁 Estructura del Proyecto

```
nodeFs/
├── src/
│   ├── fs.js              # Ejemplos básicos de operaciones de archivos
│   ├── fs-openai.js       # Transcripción de audio con OpenAI Whisper
│   ├── fs-deepgram.js     # Transcripción de audio con Deepgram
│   ├── audio.mp3          # Archivo de audio de ejemplo
│   └── index.js           # Archivo principal (vacío)
├── package.json
└── README.md
```

## 🚀 Instalación

1. **Clona o descarga el proyecto**
   ```bash
   git clone https://github.com/ArecheMinaya/Transcription-API.git
   cd Transcription-API
   ```

2. **Instala las dependencias**
   ```bash
   npm install
   ```

## ⚙️ Configuración de Variables de Entorno

Crea un archivo `.env` en la raíz del proyecto con las siguientes variables:

```env
# API Key de OpenAI (para fs-openai.js)
OPENAI_API_KEY=tu_api_key_de_openai_aqui

# API Key de Deepgram (para fs-deepgram.js)
DEEP_GRAM_API_KEY=tu_api_key_de_deepgram_aqui
```

### 🔑 Cómo obtener las API Keys

#### OpenAI API Key:
1. Ve a [OpenAI Platform](https://platform.openai.com/)
2. Inicia sesión o crea una cuenta
3. Ve a "API Keys" en el menú
4. Crea una nueva API key
5. Copia la key y agrégala a tu archivo `.env`

#### Deepgram API Key:
1. Ve a [Deepgram Console](https://console.deepgram.com/)
2. Inicia sesión o crea una cuenta
3. Ve a "API Keys" en el dashboard
4. Crea una nueva API key
5. Copia la key y agrégala a tu archivo `.env`

## 🏃‍♂️ Cómo Ejecutar el Proyecto

### Ejemplos de File System (`fs.js`)
```bash
node src/fs.js
```
Este script demuestra operaciones básicas del sistema de archivos:
- Crear un archivo
- Leer un archivo
- Actualizar un archivo
- Eliminar un archivo

### Transcripción con OpenAI (`fs-openai.js`)
```bash
node src/fs-openai.js
```
Este script:
- Lee el archivo `src/audio.mp3`
- Lo envía a la API de OpenAI Whisper para transcripción
- Guarda la transcripción en un archivo `.txt`

### Transcripción con Deepgram (`fs-deepgram.js`)
```bash
node src/fs-deepgram.js
```
Este script:
- Lee el archivo `src/audio.mp3`
- Lo envía a la API de Deepgram para transcripción
- Guarda la transcripción en un archivo `.txt`

## 📝 Funcionalidades

### Operaciones de Archivos (`fs.js`)
- ✅ Crear archivos
- ✅ Leer archivos
- ✅ Actualizar archivos (append)
- ✅ Eliminar archivos

### Transcripción de Audio
- ✅ **OpenAI Whisper**: Transcripción de alta calidad
- ✅ **Deepgram**: Transcripción rápida con detección de idioma
- ✅ Guardado automático de transcripciones en archivos `.txt`

## 🔧 Dependencias

- **dotenv**: Para manejo de variables de entorno
- **fs**: Módulo nativo de Node.js para operaciones de archivos
- **path**: Módulo nativo de Node.js para manejo de rutas

## 📋 Requisitos

- Node.js (versión 14 o superior)
- Cuentas activas en OpenAI y/o Deepgram
- Archivo de audio en formato MP3 (incluido como ejemplo)

## 🎵 Archivo de Audio

El proyecto incluye un archivo `src/audio.mp3` de ejemplo. Puedes reemplazarlo con tu propio archivo de audio para probar las transcripciones.

## 🐛 Solución de Problemas

### Error: "API Key not found"
- Verifica que el archivo `.env` existe en la raíz del proyecto
- Asegúrate de que las variables de entorno estén correctamente nombradas
- No incluyas espacios alrededor del signo `=`

### Error: "File not found"
- Verifica que el archivo `src/audio.mp3` existe
- Asegúrate de ejecutar los comandos desde la raíz del proyecto

### Error de API
- Verifica que tus API keys sean válidas y tengan créditos disponibles
- Revisa los límites de uso de las APIs

## 📄 Licencia

ISC

## 👨‍💻 Autor

Proyecto de ejemplos de Node.js para operaciones de archivos y transcripción de audio.
