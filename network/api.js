import utils from '../utils/util.js';
import Promise from '../utils/es6-promise.min';
import config from '../utils/const';
import request from './request.js';

const endPoint = config.endPoint;

function get(url, data) {
  const options = {
    headers: {},
    method: 'GET',
    qs: data,
  };
  return request(url, options);
}


function post(url, data) {
  const options = {
    headers: {},
    'content-type': 'application/json',
    method: 'POST',
    body: data,
  };
  return request(url, options);
}

//小程序首页
function getGankIndex(data = {}) {
  const { year, month, day } = data;
  return get(`${endPoint}/day/${year}/${month}/${day}`);
}

module.exports = {
  getGankIndex,
};