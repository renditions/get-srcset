const getSrcset = require('./get-srcset')

describe('get srcset attribute', () => {
  let renditions

  beforeEach(() => {
    renditions = [
      {
        src: '/images/320.jpg',
        width: 320
      },
      {
        src: '/images/1024.jpg',
        width: 1024
      }
    ]
  })

  it('should return a string', () => {
    expect(typeof getSrcset(renditions)).toBe('string')
  })

  it('should return srcset', () => {
    expect(getSrcset(renditions)).toBe('/images/320.jpg 320w,/images/1024.jpg 1024w')
  })

  it('should return srcset sorted by widths in ascending order if sort param is true', () => {
    const unsortedRenditions = [
      {
        src: '/images/1024.jpg',
        width: 1024
      },
      {
        src: '/images/320.jpg',
        width: 320
      },
      {
        src: '/images/720.jpg',
        width: 720
      }
    ]

    expect(getSrcset(unsortedRenditions, true)).toBe('/images/320.jpg 320w,/images/720.jpg 720w,/images/1024.jpg 1024w')
  })

  it('should return srcset sorted by widths in ascending order if sort param is true and widths are passed as strings', () => {
    const unsortedRenditions = [
      {
        src: '/images/1024.jpg',
        width: '1024'
      },
      {
        src: '/images/320.jpg',
        width: '320'
      },
      {
        src: '/images/720.jpg',
        width: '720'
      }
    ]

    expect(getSrcset(unsortedRenditions, true)).toBe('/images/320.jpg 320w,/images/720.jpg 720w,/images/1024.jpg 1024w')
  })
})
