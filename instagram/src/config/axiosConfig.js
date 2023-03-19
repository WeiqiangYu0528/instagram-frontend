import axios from 'axios';

const baseURL = {
    dev: "http://www.localhost:8080/",
    production: "http://instagramapp-env-1.eba-mmfmnw6m.ca-central-1.elasticbeanstalk.com/"
}

export default axios.create({
    baseURL:baseURL.production,
    headers: {"ngrok-skip-browser-warning":"true"}
});