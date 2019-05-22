const axios = require('axios');

console.clear()

axios.get('http://localhost:9090/files').then(response => {
    console.log(response.data);

}).catch(error => {
    console.log(error.response.data);

})