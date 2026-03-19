import dotenv from 'dotenv'
dotenv.config();

const url='https://ollama.com/api/generate'
const data={
        "model":"gemini-3-flash-preview",
        "prompt":"",
        "stream":false
};

const options={
    headers:{
        Authorization:'Bearer ' + process.env.ollama_api_key,
        'Content-Type':'application/json'
    }
}

export default {url,data,options};