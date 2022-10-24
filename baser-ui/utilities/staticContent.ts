export const formatContent = (content = '') => {
  content = content.replace(/(?:\r\n|\r|\n)/g, '<br>')
  return content
}
