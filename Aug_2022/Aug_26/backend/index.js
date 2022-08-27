const express = require('express')
const cors = require('cors')
const port = 3010
const app = express()
app.use(cors())

app.get('/', (_, res) =>{
    res.send({
        message: "Welcome to my page", background: "https://wallpaperaccess.com/full/175484.jpg"
    })
})
app.get('/name', (_, res) =>{
    res.json({
        name: "Iron Man", image: "https://m.media-amazon.com/images/M/MV5BNjNkOGE4MWMtYTY3Yi00ZTk5LTk4MDktODA1YjkzMjNkMTA4XkEyXkFqcGdeQXVyNjU1OTg4OTM@._V1_.jpg",
        heading: "Name : Iron Man", start: "Release date: 1 May 2008 (India)"
    })
})
app.get('/bio', (_, res) =>{
    res.json({
        name: "Iron Man", image: "https://m.media-amazon.com/images/M/MV5BNjNkOGE4MWMtYTY3Yi00ZTk5LTk4MDktODA1YjkzMjNkMTA4XkEyXkFqcGdeQXVyNjU1OTg4OTM@._V1_.jpg",
        heading: "I am Iron Man", start: "Release date: 1 May 2008 (India)", about: "When Tony Stark, an industrialist, is captured, he constructs a high-tech armoured suit to escape. Once he manages to escape, he decides to use his suit to fight against evil forces to save the world.", intro: "Iron Man is a 2008 American superhero film based on the Marvel Comics character of the same name. Produced by Marvel Studios and distributed by Paramount Pictures,[N 1] it is the first film in the Marvel Cinematic Universe (MCU). Directed by Jon Favreau from a screenplay by the writing teams of Mark Fergus and Hawk Ostby, and Art Marcum and Matt Holloway, the film stars Robert Downey Jr. as Tony Stark / Iron Man alongside Terrence Howard, Jeff Bridges, Shaun Toub, and Gwyneth Paltrow. In the film, following his escape from captivity by a terrorist group, world famous industrialist and master engineer Tony Stark builds a mechanized suit of armor and becomes the superhero Iron Man."
    })
})
app.get('/intrest', (_, res) =>{
    res.json({
        image: "https://www.space-figuren.de/images/product_images/info_images/21915_0.jpg",
        heading: "He Intrested in",
        intrest: "Tony Stark, who has inherited the defense contractor Stark Industries from his late father Howard Stark, is in war-torn Afghanistan with his friend and military liaison, Lieutenant colonel James Rhodes, to demonstrate the new Jericho missile. After the demonstration, the convoy is ambushed and Stark is critically wounded by a missile used by the attackers: one of his company's own. He is captured and imprisoned in a cave by a terrorist group called the Ten Rings. Yinsen, a fellow captive doctor, implants an electromagnet into Stark's chest to keep the shrapnel shards that wounded him from reaching his heart and killing him. Ten Rings leader Raza offers Stark freedom in exchange for building a Jericho missile for the group, but he and Yinsen know that Raza will not keep his word."
    })
})

app.get('/contact', (_, res) =>{
    res.json({
        heading: "Contact Us",
        location: "Chicago, US",
        phone: "+00 151515",
        email: "mail@mail.com"
    })
})



app.listen(port, () =>{
    console.log(`server started on port number ${port} successfully`)
})