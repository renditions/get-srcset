const getSrcset = require('./get-srcset')

describe('get srcset attribute', () => {
  let renditions

  beforeEach(() => {
    renditions = [
      {
        src: '/images/320.jpg',
        width: '320'
      },
      {
        src: '/images/1024.jpg',
        width: '1024'
      }
    ]
  })

  it('should return a string', () => {
    expect(typeof getSrcset(renditions)).toBe('string')
  })

  it('should return the correct string', () => {
    expect(getSrcset(renditions)).toBe('/images/320.jpg 320w,/images/1024.jpg 1024w')
  })
})
