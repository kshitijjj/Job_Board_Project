import dotenv from 'dotenv';
dotenv.config();

const options = {
    params: {
        datePosted: 'week',
        query: 'technology',
        remoteOnly: 'false',
        employmentTypes: 'contractor;fulltime;parttime;temporary',
        location: 'india'
    },
    headers:{
        'x-rapidapi-key': process.env.rapidapi,
        'x-rapidapi-host': 'jobs-api14.p.rapidapi.com'
    }
};

export default options;