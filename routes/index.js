async function routes (fastify, options) {

  fastify.get('/', async (request, reply) => {
    return { hello: 'world' }
  })

  fastify.get('/animals', async (request, reply) => {
    return { hello: 'animal world' }
  })

  fastify.get('/animals/:animal', async (request, reply) => {
    return { hello: `${request.params.animal} animal world`,
     artists: [
       {
         name: 'artist1',
         twitter: 'twit1',
         markets:[
           { url: "https://foundation.app/sabrinaratte", name: "sabrinaratte", market_type: 0 },
           { url: "https://opensea.io/accounts/08AM", name: "08am", market_type: 1 },
           { url: "https://superrare.app/time", name: "Time", market_type: 2 } 
         ]
       },
       {
         name: 'artist2',
         twitter: 'twit1',
         markets:[
           { url: "https://foundation.app/sabrinaratte", name: "sabrinaratte_1 ", market_type: 0 },
           { url: "", name: "", market_type: 1 },
           { url: "https://superrare.app/time", name: "Time", market_type: 2 } 
         ]
       },
       {
         name: 'artist3',
         twitter: 'twit1',
         markets:[
           { url: "https://foundation.app/sabrinaratte", name: "sabrinaratte_1 ", market_type: 0 },
           { url: "https://opensea.io/accounts/08AM", name: "08am_2", market_type: 1 },
           { url: "https://superrare.app/time", name: "Time_2", market_type: 2 } 
         ]
       },
       {
         name: 'artist4',
         twitter: 'twit1',
         markets:[
           { url: "https://foundation.app/sabrinaratte", name: "sabrinaratte_3", market_type: 0 },
           { url: "https://opensea.io/accounts/08AM", name: "08am_2", market_type: 1 },
           { url: "https://superrare.app/time", name: "Time_#", market_type: 2 } 
         ]
       },
       {
         name: 'artist5',
         twitter: 'twit1',
         markets:[
           { url: "", name: "", market_type: 0 },
           { url: "https://opensea.io/accounts/08AM", name: "08am_2", market_type: 1 },
           { url: "https://superrare.app/time", name: "Time_2", market_type: 2 } 
         ]
       },
     ]
    }
  })
}

module.exports = routes
