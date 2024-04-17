import { prisma } from '../src/lib/prisma'

async function seed() {
    await prisma.event.create({
        data: {
            id: '192c8571-826b-457e-aeff-5c9b1d74e6e5',
            title: 'Unite Summit',
            slug: 'unite-sumit',
            details: 'Um evento para dev apaixonados(as) por código',
            maximumAttendees: 120,
        }
    })
}

seed().then(() => {
    console.log('Database seeded!')
    prisma.$disconnect()
})