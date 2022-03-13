import * as fs from 'fs'

interface Tech {
  svgTitle: string
  title: string
}
const generateDiv = (tech: Tech): string => {
  return `<div>
    <img
      align=top
      src="https://github.com/get-icon/geticon/raw/master/icons/${tech.svgTitle}.svg"
      alt="${tech.title}"
      width="${iconSize}px"
      height="${iconSize}px"
    />
    <span>${tech.title}</span>
  </div>`
}
const iconSize: number = 22 //px
const currentTech: Array<Tech> = [
  { svgTitle: 'typescript-icon', title: 'Typescript' },
  { svgTitle: 'javascript', title: 'Javascript' },
  { svgTitle: 'nodejs-icon', title: 'Node.js' },
  { svgTitle: 'express', title: 'Express' },
  { svgTitle: 'nestjs', title: 'Nest' },
  { svgTitle: 'gatsby', title: 'Gatsby' },
  { svgTitle: 'react', title: 'React' },
  { svgTitle: 'chakra-icon', title: 'Chakra UI' },
  { svgTitle: 'docker-icon', title: 'Docker' },
  { svgTitle: 'azure-icon', title: 'Microsoft Azure' },
]
const expTech: Array<Tech> = [
  { svgTitle: 'kotlin', title: 'Kotlin' },
  { svgTitle: 'java', title: 'Java' },
  { svgTitle: 'spring', title: 'Spring Boot' },
  { svgTitle: 'vue', title: 'Vue.js' },
  { svgTitle: 'tailwindcss-icon', title: 'Tailwind CSS' },
  { svgTitle: 'dotnet', title: '.NET' },
  { svgTitle: 'rails', title: 'Rails' },
  { svgTitle: 'graphql', title: 'GraphQL' },
]
const toolsTech: Array<Tech> = [
  { svgTitle: 'visual-studio-code', title: 'Visual Studio Code' },
  { svgTitle: 'intellij-idea', title: 'IntelliJ IDEA' },
  { svgTitle: 'yarn', title: 'Yarn v3' },
  { svgTitle: 'gitkraken', title: 'GitKraken' },
  { svgTitle: 'vercel', title: 'Vercel' },
]

let content: string = ''
try {
  const dataStart = fs.readFileSync('./README-start.md', 'utf8')
  content.concat(dataStart)
} catch (err) {
  console.error(err)
}

content.concat('\n\n## Tech stack I am currently working with\n\n')
content.concat(...currentTech.map(generateDiv))

content.concat('\n\n## Tech stack I am experienced in\n\n')
content.concat(...expTech.map(generateDiv))

content.concat('\n\n## Favourite tools\n\n')
content.concat(...toolsTech.map(generateDiv))

try {
  const dataEnd = fs.readFileSync('./README-end.md', 'utf8')
  content.concat('\n\n', dataEnd)
  fs.writeFileSync('./README.md', content)
} catch (err) {
  console.error(err)
}
