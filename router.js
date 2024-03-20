const Router = require('@koa/router');
const { koaBody } = require('koa-body');

const router = new Router({
    prefix: '/albums'
})

router.get('/', (ctx, next) =>{
    ctx.body = "Albums: ...";
})

router.get('/:id', (ctx, next) =>{
    ctx.body = `Album #${ctx.params.id}, ${ctx.query.foo}`;
})

router.post('/', koaBody({ multipart: true }), (ctx, next) =>{
    const resourceId = Math.random()
    console.log(JSON.stringify(ctx.request.body))
    ctx.set('Location', `/albums/${resourceId}`)
    ctx.status = 201
});

module.exports = router;