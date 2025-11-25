import fs from 'fs-extra'
import path from 'path'
import glob from 'fast-glob'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const rootDir = path.resolve(__dirname, '..')
const svgDir = path.resolve(rootDir, 'svg')
const outputDir = path.resolve(rootDir, 'src/components')
const indexFile = path.resolve(rootDir, 'src/index.ts')

const formatName = (name: string) => {
  return name
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join('')
}

const generate = async () => {
  await fs.ensureDir(outputDir)
  await fs.emptyDir(outputDir)

  const files = await glob('*.svg', { cwd: svgDir, absolute: true })
  const exports: string[] = []

  for (const file of files) {
    const filename = path.basename(file, '.svg')
    const componentName = `Icon${formatName(filename)}`
    const content = await fs.readFile(file, 'utf-8')
    
    // Simple SVG optimization/cleanup could go here
    // For now, we just wrap it in a Vue component
    
    const vueContent = `
<template>
  ${content.replace('<svg', '<svg width="1em" height="1em" class="m-icon"')}
</template>

<script setup lang="ts">
defineOptions({
  name: '${componentName}'
})
</script>
`
    
    await fs.writeFile(path.resolve(outputDir, `${componentName}.vue`), vueContent)
    exports.push(`export { default as ${componentName} } from './components/${componentName}.vue'`)
    console.log(`Generated ${componentName}`)
  }

  await fs.writeFile(indexFile, exports.join('\n') + '\n')
  console.log('Done!')
}

generate()
