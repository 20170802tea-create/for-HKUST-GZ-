import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'en-US',
  title: 'Audio Gear Notes',
  description: 'Gear I have used, setup notes, and troubleshooting.',
  base: '/audio-gear-notes/',
  themeConfig: {
    outline: [2, 3],
    search: { provider: 'local' }
  }
})
