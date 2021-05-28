# Jeja-api

## What is it?
This is simple unofficial [jeja](https://jeja.pl) wrapper to get random memes and jokes.

## Examples
### Get random meme
```js
const jeja = require("jeja-api");
const test = async () => {
    const meme = await jeja.randomMeme();
    console.log(meme);
    // -> { image: imageUrl, name: memeName}
}
test()
```
### Get random joke
```js
const jeja = require("jeja-api");
const test = async () => {
    const joke = await jeja.randomJoke();
    console.log(joke);
    // -> joke text
}
test()
```