export default function (app) {
  app.get('/', (req, res) => {
    res.render('index.pug', {
      isDevelopment: NODE_ENV === 'development',
      title: 'Chat Application'
    })
  })
}
