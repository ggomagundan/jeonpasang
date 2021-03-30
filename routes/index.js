async function routes (fastify, options) {

  fastify.get('/', async (request, reply) => {
    return { hello: 'world' }
  })

  fastify.get('/animals', async (request, reply) => {
    return { hello: 'animal world' }
  })

  fastify.get('/animals/:animal', async (request, reply) => {
    return { hello: `${request.params.animal} animal world` }
  })
}

module.exports = routes
