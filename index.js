import express from "express"
import cors from "cors"

const app = express()
app.use(cors())
app.use(express.json())


const users = [];
const tweets = [];
let primeirosTweets = [];
let foto;



app.post("/sign-up", (req, res) => {



    const newUser = {
        username: req.body.username,
        avatar: req.body.avatar
    }

    users.push(newUser)


    res.send("OK")
});



app.post("/tweets", (req, res) => {

    const obj = users.find((usuario) => usuario.username === req.body.username)
    foto = obj.avatar

    const tweet = {
        username: req.body.username,
        avatar: foto,
        tweet: req.body.tweet
    }


    tweets.unshift(tweet)

    res.send("OK")

});



app.get("/tweets", (req, res) => {


    const tamanho = tweets.length;

    if(tamanho >= 1){
        primeirosTweets = tweets.slice(0, 10)
    }


    res.send(primeirosTweets)

})

app.listen(5000, () => console.log('App running in port 5000'))