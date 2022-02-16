const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient();

const create = async ({title}) => {
    return await prisma.events.create({
        data: {
           'title': title,
        },
    })
}

const getAll = async () => {
    return await prisma.events.findMany();
}

module.exports = {create,getAll}