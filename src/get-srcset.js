const getSrcset = renditions => renditions
  .map(({ src, width }, i) => `${src} ${width}w`)
  .join(',')

const sortRenditions = renditions => {
  renditions.forEach(r => {
    if (typeof r.width === 'string') {
      r.width = parseInt(r.width, 10)
    }
  })

  renditions.sort((a, b) => a.width > b.width)
}

const getSortedSrcset = (renditions, sort = false) => {
  if (!sort) {
    return getSrcset(renditions)
  }

  const renditionsCopy = [...renditions]

  sortRenditions(renditionsCopy)

  return getSrcset(renditionsCopy)
}

module.exports = getSortedSrcset
module.exports.sortRenditions = sortRenditions
