const Koa = require('koa');
const albumsRouter = require('./router');

const app = new Koa();

app.use(albumsRouter.routes(), albumsRouter.allowedMethods())
app.listen(3000)