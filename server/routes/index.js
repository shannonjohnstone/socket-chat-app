export default function (app) {
  app.get('/documentation', (req, res) => {
    res.render('documentation.pug', {
      isDevelopment: process.env.NODE_ENV === 'development',
      welcome: 'Documentation'
    })
  })

  // app.get('/grid-example', (req, res) => {
  //   res.render('grid-example.pug', {
  //     isDevelopment: process.env.NODE_ENV === 'development',
  //     welcome: 'Grid usage examples'
  //   })
  // })

  app.get('/styleguide', (req, res) => {
    res.render('styleguide.pug', {
      isDevelopment: process.env.NODE_ENV === 'development',
      welcome: 'Styleguide examples'
    })
  })

  app.get('/room-one2', (req, res) => {
    res.render('room-one.pug', {
      isDevelopment: process.env.NODE_ENV === 'development',
      welcome: 'Welcome to Room One....'
    })
  })

  app.get('/', (req, res) => {
    console.log('/ - root route');
    res.render('index.pug', {
      isDevelopment: process.env.NODE_ENV === 'development',
      welcome: 'Welcome to Chatty'
    })
  })
}
