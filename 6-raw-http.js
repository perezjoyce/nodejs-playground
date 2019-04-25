const https = require('https')
const url = "https://api.darksky.net/forecast/"
    + "3a86fdc7e15ad649157a33abfee09437/40,-75?units=si"

const request = https.request(url, (response) => {
    //we don't have access to the complete response body
    //we can go ahead and grab invidiual parts that comes through

    let data = '' //string
    
    //response.on is a function that allows us to register a handler
    response.on('data', (chunk) => {
        data = data + chunk.toString()
    })

    //wait for the end event
    response.on('end', () => {
        const body = JSON.parse(data)
        console.log(body)
    })
})


//error event listner
request.on('error', (error) => {
    console.log('An error ', error)
})

//kick things off
request.end()