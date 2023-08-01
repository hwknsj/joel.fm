import path from 'path'

export default {
  name: 'joel.fm',
  shortName: 'joel.fm',
  description: 'web design & development, portfolio, etc.',
  url: 'https://joel.fm',
  favicon: {
    ico: path.resolve(__dirname, `static/favicon.ico`),
    png: path.resolve(__dirname, `content/assets/logo.png`),
    svg: path.resolve(__dirname, `static/favicon.svg`)
  },
  resumeFilename: 'joel-hawkins-torres-resume.pdf',
  prefix: '/',
  author: 'joél hawkins torres <joel@joel.fm>',
  email: 'joel@joel.fm',
  instagram: '@joel.biz',
  twitter: 'joel_biz'
}