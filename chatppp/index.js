const express = require('express')


const { Configuration, OpenAIApi } = require( "openai");
const configuration = new Configuration({
    organization: "org-PjMrGQ5CV5Wv4yazLkkICyNT",
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);


//create a simple express api that calls the function from above
const app = express()
const port = 3500

app.post( '/', async (req, res) => {
    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: "Say this is a test",
        temperature: 0,
    });
    console.log(response.data.choices[0].text)
    res.json({
        data: response.data
    })
})

app.listen(port, () => {
    console.log(`listening at http://localhost:${port}`)
})
