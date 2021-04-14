// 1. import fs and http modules
const fs = require('fs');
const http = require('http');


// 2 define function which writes data  to file
const writeDataToFile = data => {
    fs.writeFile(`${__dirname}/result/posts.txt`,data,(msg,err) => {  
        console.log('File has been written to file')
    })    
}


//3. define function which fetches the data from the api and then writes it to file
const getApiData = (url,writeFileFunction) => { 
    http.get(url, (resp) => {
        let apiData= ''
    // A chunk of data has been received.
    resp.on('data', (chunk) => {
        apiData += chunk;
    });
    // The whole response has been received. Print out the result.
    resp.on('end', () => {
        writeFileFunction(apiData);
    });
    }).on("error", (err) => {
    console.log("Error: " + err.message);
    });
}



getApiData('http://jsonplaceholder.typicode.com/posts',writeDataToFile)






