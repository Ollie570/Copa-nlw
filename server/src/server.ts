import Fastify from 'fastify'
import cors from '@fastify/cors'
//Retornando dados da tabela:
import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient({
    log: ['query'],
})

async function bootstrap() {
    //Criando servidor:
    const fastify = Fastify({
        logger: true,
    })

    await fastify.register(cors, {
        origin: true,
    })

    //criando primeira rota:
    fastify.get('/pools/count', async () => {
        const count = await prisma.pool.count()

        return {count}
    })

    await fastify.listen({port: 3333})
}

bootstrap()