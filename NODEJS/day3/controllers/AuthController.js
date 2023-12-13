const dbConfig = require('../config/database')
const mysql = require('mysql2')
const jwt = require ('jsonwebtoken')
const pool = mysql.createPool(dbConfig)
const {
    responseauthSuccess,
    responsefailValidate

} = require('../traits/apiResponse')

const { connect } = require('../routes/book')

pool.on('error', (error) => {
    console.error(err)
})

const accessTokenSecret ='2023-wikrama-exp'

const register = (req, res) => {
    const data = {
        email: req.body.email,
        username: req.body.username,
        password: req.body.password
    }

    pool.getConnection((err, connection) => {
        if(err) throw err
    
    })

if(data.email == null || data.username == null || 
    data.password == null){
        responsefailValidate(res, 'Email/Username/Password wajib diisi')
    }else{
        const query = 'INSERT INTO users SET ?'

        const query2 = `SELECT * FROM users WHERE email='${data.email}' OR username='${data.username}'`

        pool.getConnection(async (err, connection) => {
            if(err) throw err

            var checkUnique = new Promise ((resolve) => {
                connection.query(query2, (err, results) => {
                    if(err) throw err
                    if(results.length > 0){
                        res.status(403).json({
                            message: 'Email/Username sudah digunakan'
                        })
        
                        return
        
                    }else{
                        resolve()
                    }
                })
            })
            await checkUnique.then(()=>{
                    
                connection.query(query, [data], (err, results) => {
                    if(err) throw err
                    if(results.affectedRows >= 1){
                        const token= jwt.sign({
                            email: data.email,
                            username: data.username
                        }, accessTokenSecret)
    
                        responseauthSuccess(res, token, 'REgister successfully', {
                            email: data.email,
                            username: data.username
                        })    
                       
                    }else{
                        res.status(500).json({
                            message: 'Failed creating user'   
                        })   
                    } 
                })   
            })
            connection.release()
        })
    }
}

const login = ((req, res )=> {
    const {email, password} = req.body

    if (email == nul || password || null){
        responsefailValidate(res, 'email/password wajib diisi')
    }else{
        const query = `SELECT * FROM users WHERE email = '${email} AND password='${password}'`

        pool.getConnection((err, connection) => {
            if(err) throw err
            
            connection.query(query,(err, results) => {
                if(err) throw err

                if (results.length >= 1){
                    const user = results.pop()

                    const token = jwt.sign(
                        {
                        email: user.email,
                        username: username.username
                        },
                        accessTokenSecret
                    )

                    responseauthSuccess(res, token, 'login successful', {
                        email: user.email,
                        username: username.username
                    })

                    return
                }
                res.status(404).json({
                    message: 'Email or password wrong'
                })
            })

            connection.release()
        })        
    }
})

module.exports = {
    register, login
}


