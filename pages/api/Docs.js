import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function handler(req, res) {
  if (req.method == 'POST') {
    const data = await prisma.user.findMany()
    let id = 0
    data.map(item => {
      if (item.name === req.body.name) {
        id = item.id
      }
    })
    const docs = await prisma.docs.findMany({
      where: {
        UserId: id,
      },
    })
    res.json(docs)
  }
}
