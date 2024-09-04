/** font utilities */
import type { FontDescription } from './fonts'
/**
 * camelToKebab
 * @param {string} camelCase a CamelCase string
 * @returns {string} input in kebab-case
 */
export const camelToKebab = (camelCase: string): string =>
  camelCase
    .replace(/([a-z])([A-Z])/g, '$1-$2') // Insert a hyphen at each 'word boundary'
    .replace(/([A-Z])([A-Z])/g, '$1-$2') // Insert hyphen between each uppercase letter
    .toLowerCase() // Convert the entire string to lowercase

/**
 * trimPostScriptStyle
 * @param {string} postScriptName - font's PostScript name, like {FontFamily}-{Weight}{Shape}, e.g. 'CorporateAPro-BoldItalic'.
 * Input is assumed to be hyphenated
 * @returns {string} the font family piece of the string.
 */
export const trimPostScriptStyle = (postScriptName: string): string =>
  postScriptName.split('-')[0]

/**
 * parseFontFamily
 * @param postScriptName - font's PostScript name, e.g. 'CorporateAPro-BoldItalic'.
 * @returns {string} a kebab-case, css-friendly 'font-family' name, e.g. 'corporate-a-pro'
 */
export const parseFontFamily = (postScriptName: string) =>
  camelToKebab(trimPostScriptStyle(postScriptName))

export const generateFontPaths = ({
  formats,
  postScriptName
}: {
  formats: string[]
  postScriptName: string
}) => {
  let paths = {}
  formats.forEach(format => {
    paths = { ...paths, [format]: `/fonts/${postScriptName}.${format}` }
  })
  return paths
}
export const generateCSSFontSrc = (
  font: Pick<FontDescription, 'formats' | 'postScriptName'>
) =>
  font.formats
    .map(
      format =>
        `url('/fonts/${font.postScriptName}.${format}') format(${format})`
    )
    .join(',')
