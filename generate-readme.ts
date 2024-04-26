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
    `<span>&nbsp;${title}&nbsp;&nbsp;</span>\n`
  )
}
const iconSize: number = 22 //px
const currentTech: Tech[] = [
  { url: 'https://aws.amazon.com/', svgTitle: 'aws', title: 'AWS' },
  { url: 'https://www.terraform.io/', svgTitle: 'terraform', title: 'Terraform' },
  { url: 'https://www.docker.com/', svgTitle: 'docker-icon', title: 'Docker' },
  { url: 'https://nodejs.org/', svgTitle: 'nodejs-icon', title: 'Node.js' },
  { url: 'https://nextjs.org/', svgTitle: 'nextjs', title: 'Next.js' },
]
const expLang: Tech[] = [
  { url: 'https://www.typescriptlang.org/', svgTitle: 'typescript-icon', title: 'Typescript' },
  { url: 'https://www.javascript.com/', svgTitle: 'javascript', title: 'Javascript' },
  { url: 'https://kotlinlang.org/', svgTitle: 'kotlin', title: 'Kotlin' },
  { url: 'https://www.oracle.com/java/', svgTitle: 'java', title: 'Java' },
  { url: 'https://www.ruby-lang.org/en/', svgTitle: 'ruby', title: 'Ruby' },
]
const expTech: Tech[] = [
  { url: 'https://azure.microsoft.com/', svgTitle: 'azure-icon', title: 'Microsoft Azure' },
  { url: 'https://spring.io/projects/spring-boot', svgTitle: 'spring', title: 'Spring Boot' },
  { url: 'https://rubyonrails.org/', svgTitle: 'rails', title: 'Rails' },
  { url: 'https://graphql.org/', svgTitle: 'graphql', title: 'GraphQL' },
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

content = content.concat('\n\n## Languages that I am comfortable with\n\n')
content = content.concat(...expLang.map(generateDiv))

try {
  const dataEnd = fs.readFileSync(path.join(__dirname, 'README-end.md'), 'utf8')
  content = content.concat('\n\n', dataEnd)
  fs.writeFileSync(path.join(__dirname, 'README.md'), content, { encoding: 'utf8', flag: 'w' })
} catch (err) {
  console.error(err)
}
