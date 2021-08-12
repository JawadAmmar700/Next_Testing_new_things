const mysql = require('mysql')
const bcrypt = require('bcryptjs')

const con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'NextAuth',
})
con.connect(function (err) {
  if (err) throw err
  console.log('Connected!')
})

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { username, email, pass, color, SignUpClicked } = req.body
    let error = ''

    if (SignUpClicked) {
      const sql = 'SELECT * FROM Users'
      con.query(sql, function (err, result) {
        if (err) throw err
        console.log(result)
        result.map(user => {
          if (user.Username === username) {
            error = 'username already exists'
            return
          }
          if (user.Email === email) {
            error = 'Email already exists'
            return
          }
          if (user.password === pass) {
            error = 'password already exists'
            return
          }
        })
        console.log(error)
        if (!error) {
          bcrypt.hash(pass, 10, (err, hash) => {
            if (err) {
              console.error(err)
              return
            }

            const sql =
              'INSERT INTO Users (Username, Email,password,color) VALUES (?,?,?,?)'
            con.query(
              sql,
              [username, email, hash, color],
              function (err, result) {
                if (err) throw err
                res.send(result)
              }
            )
          })
        } else {
          res.send(error)
        }
      })
    } else {
      const sql = 'SELECT * FROM Users'
      con.query(sql, function (err, result) {
        if (err) throw err
        console.log(result)
        const foundUser = result.filter(
          user => user.Username === username && user.Email === email
        )
        console.log(foundUser)
        if (foundUser.length > 0) {
          bcrypt.compare(pass, foundUser[0].password, (err, response) => {
            if (err) {
              console.error(err)
              return
            }
            console.log(response) //true or false

            res.send(
              foundUser.length > 0 && response
                ? foundUser
                : 'email or password incorrect'
            )
          })
        } else {
          res.send('email or username is in correct')
        }
      })
    }
  }
}
