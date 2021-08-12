import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function handler(req, res) {
  if (req.method == 'POST') {
    let user_id = 0
    const check = await prisma.user.findMany()
    console.log(check)
    if (check.length > 0) {
      check.map(async item => {
        if (item.name === req.body.name) {
          user_id = item.id
          await prisma.docs.create({
            data: {
              UserId: item.id,
              docName: req.body.doc,
              Saved: '',
            },
          })
        }
      })
    } else {
      const user = await prisma.user.create({
        data: {
          name: req.body.name,
        },
      })
      console.log(user)
      await prisma.docs.create({
        data: {
          UserId: user.id,
          docName: req.body.doc,
          Saved: '',
        },
      })
    }
    if (user_id == 0 && check.length > 0) {
      const user = await prisma.user.create({
        data: {
          name: req.body.name,
        },
      })
      console.log(user)
      await prisma.docs.create({
        data: {
          UserId: user.id,
          docName: req.body.doc,
          Saved: '',
        },
      })
    }
    res.send('ok')
  }
}
