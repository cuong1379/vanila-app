const fs = require('fs')
const path = require('path')

const src = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../package.json')))
const dst = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'package-com.json')))

Object.assign(src.dependencies, dst.dependencies)
Object.assign(src.devDependencies, dst.devDependencies)

src.dependencies = Object.fromEntries(Object.entries(src.dependencies).sort())
src.devDependencies = Object.fromEntries(Object.entries(src.devDependencies).sort())

fs.writeFileSync('package.json', JSON.stringify(src, null, 2))
