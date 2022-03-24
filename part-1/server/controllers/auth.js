const users = []

module.exports = {
    login: (req, res) => {
      console.log('Logging In User')
      console.log(req.body)
      const { username, password } = req.body
      for (let i = 0; i < users.length; i++) {
        if (users[i].username === username && users[i].password === password) {
          res.status(200).send(users[i])
        }
      }
      res.status(400).send("User not found.")
    },
    register: (req, res) => {
        console.log('Registering User')
        console.log(req.body)
        users.push(req.body)
      res.status(200).send(req.body)
      const { username, email, firstName, lastName, password } = req.body
      const hashedPassword = bcrypt.hashSync(password, 10)
      const newUser = {
        username,
        email,
        firstName,
        lastName,
        password: hashedPassword,
      }
      users.push(newUser)
      res.status(200).send(newUser)
      delete newUser.password
    }
}