import * as fs from 'fs'
import path from 'path'

interface Tech {
  url?: string
  svgTitle: string
  title: string
}
const generateDiv = ({ url, svgTitle, title }: Tech): string => {
  return (
    (url ? `<a href="${url}" target="_blank">` : '') +
    `<img src="https://github.com/get-icon/geticon/raw/master/icons/${svgTitle}.svg"
      alt="${title}" align=top width="${iconSize}px" height="${iconSize}px" />` +
    (url ? `</a>` : '') +
    `<span>${title}&nbsp;&nbsp;</span>\n`
  )
}
const iconSize: number = 22 //px
const currentTech: Array<Tech> = [
  { url: 'https://www.typescriptlang.org/', svgTitle: 'typescript-icon', title: 'Typescript' },
  { url: 'https://www.javascript.com/', svgTitle: 'javascript', title: 'Javascript' },
  { url: 'https://nodejs.org/en/about/', svgTitle: 'nodejs-icon', title: 'Node.js' },
  { url: 'https://expressjs.com/', svgTitle: 'express', title: 'Express' },
  { url: 'https://nestjs.com/', svgTitle: 'nestjs', title: 'Nest' },
  { url: 'https://www.gatsbyjs.com/', svgTitle: 'gatsby', title: 'Gatsby' },
  { url: 'https://hu.reactjs.org/', svgTitle: 'react', title: 'React' },
  { url: 'https://chakra-ui.com/', svgTitle: 'chakra-icon', title: 'Chakra UI' },
  { url: 'https://www.docker.com/', svgTitle: 'docker-icon', title: 'Docker' },
  { url: 'https://azure.microsoft.com/hu-hu/overview/', svgTitle: 'azure-icon', title: 'Microsoft Azure' },
]
const expTech: Array<Tech> = [
  { url: 'https://kotlinlang.org/', svgTitle: 'kotlin', title: 'Kotlin' },
  { svgTitle: 'java', title: 'Java' },
  { url: 'https://spring.io/projects/spring-boot', svgTitle: 'spring', title: 'Spring Boot' },
  { url: 'https://vuejs.org/', svgTitle: 'vue', title: 'Vue.js' },
  { url: 'https://tailwindcss.com/', svgTitle: 'tailwindcss-icon', title: 'Tailwind CSS' },
  { svgTitle: 'dotnet', title: '.NET' },
  { url: 'https://rubyonrails.org/', svgTitle: 'rails', title: 'Rails' },
  { url: 'https://graphql.org/', svgTitle: 'graphql', title: 'GraphQL' },
]
const toolsTech: Array<Tech> = [
  { svgTitle: 'visual-studio-code', title: 'Visual Studio Code' },
  { svgTitle: 'intellij-idea', title: 'IntelliJ IDEA' },
  { svgTitle: 'yarn', title: 'Yarn v3' },
  { url: 'https://www.gitkraken.com/', svgTitle: 'gitkraken', title: 'GitKraken' },
  { url: 'https://vercel.com/', svgTitle: 'vercel', title: 'Vercel' },
]

let content: string = ''
try {
  const dataStart = fs.readFileSync(path.join(__dirname, 'README-start.md'), 'utf8')
  content = content.concat(dataStart)
} catch (err) {
  console.error(err)
}

content = content.concat('\n\n## Tech stack I am currently working with\n\n')
content = content.concat(...currentTech.map(generateDiv))

content = content.concat('\n\n## Tech stack I am experienced in\n\n')
content = content.concat(...expTech.map(generateDiv))

content = content.concat('\n\n## Favourite tools\n\n')
content = content.concat(...toolsTech.map(generateDiv))

try {
  const dataEnd = fs.readFileSync(path.join(__dirname, 'README-end.md'), 'utf8')
  content = content.concat('\n\n', dataEnd)
  fs.writeFileSync(path.join(__dirname, 'README.md'), content, { encoding: 'utf8', flag: 'w' })
} catch (err) {
  console.error(err)
}
