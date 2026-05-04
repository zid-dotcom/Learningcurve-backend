const jwt = require('jsonwebtoken')



const jwtmiddleware = async (req, res, next) => {
    try {
        const {atoken} = req.headers
        if (!atoken) {
            return res.status(500).json('Token is not authorized')
        } else {
            const tokenverify = jwt.verify(atoken, process.env.jwt_secret)
            next()


        }


    }
    catch (err) {
        console.log(err);
        res.status(401).json(err)


    }
}

module.exports=jwtmiddleware



