const axios = require("axios")
const cheerio = require("cheerio")
const config = require("./config.json")

const randomMeme = async () => {
    const $ = cheerio.load((await axios.get(config.url.memes)).data)
    const element = $(".ob-left-image.ob-image-j").first()
    const src = element.attr("src")
    const name = element.attr("alt")
   return {
       image: src,
       name,
   }
}

const randomJoke = async () => {
    const $ = cheerio.load((await axios.get(config.url.jokes)).data)
    const element = $("div.dow-left-text").first()
    const text = element.children("p").first().text()
    return text
}

module.exports = {
    randomMeme,
    randomJoke
}