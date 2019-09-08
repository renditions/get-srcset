const getSrcset = renditions => renditions
  .map(({ src, width }, i) => `${src} ${width}w`)
  .join(',')

module.exports = getSrcset
