import axios from 'axios';

const url = {
    dev:"http://localhost:8080/",
    production: "http://instagramapp-env-1.eba-mmfmnw6m.ca-central-1.elasticbeanstalk.com/"
}

export default axios.create({
    baseUrl:url.dev,
    headers:{"ngrok-skip-browser-warning":"true"}
})