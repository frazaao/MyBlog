import { cacheExchange, createClient, dedupExchange, fetchExchange } from 'urql'

const client = createClient({
    url: 'https://api-sa-east-1.graphcms.com/v2/ckzxl12qy4plq01ys4vy83qe9/master',
    exchanges: [
        dedupExchange, cacheExchange, fetchExchange
    ]    
})

export { client };