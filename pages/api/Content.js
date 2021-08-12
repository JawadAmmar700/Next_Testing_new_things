import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { userName, id, nameJson } = req.body
    await prisma.docs.update({
      where: {
        id: Number(id),
      },
      data: {
        Saved: JSON.stringify(nameJson),
      },
    })
    res.send('ok')
  } else {
    const data = await prisma.docs.findMany()
    res.json(data)
  }
}
