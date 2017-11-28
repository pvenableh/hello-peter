
module.exports = {
  build: {
    vendor: ['axios'] // Add axios in the vendor.bundle.js
  },
  head: {
    title: 'TESTING hue creative agency',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'huestudios.com 4.0' }
    ],
    script: [
      { src: '//fast.fonts.net/jsapi/524a3767-4380-44c1-825f-dfe5af404e7b.js' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'http://huestudios.com/favicon.ico' }
    ]
  },
  loading: { color: '#ffCC00', height: '10px' }
}
