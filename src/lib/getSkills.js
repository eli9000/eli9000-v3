// import React from 'react';
// import axios from 'axios';
const axios = require('axios');

const penisFace = () => {
  return axios({
    method: 'get',
    url: 'https://s3.amazonaws.com/e9k-static/skills/skills.json',
  }).then(res => {
    console.log(res);
  });
};
