import axios from 'axios'



const login = (data) => {
    let {
        location
    } = window
    let url = `http://${location.hostname}:9090/login`
    let {email, password} = data
    axios({
        data: {email,password},
        url: url,
        method: 'post'
    })
}

export default {}