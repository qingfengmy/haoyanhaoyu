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
// 随机数据
function getGankRandom() {
  return get(`${endPoint}/random/data/all/20`);
};
// 历史数据
function getGankHistory(data = {}) {
  console.log('getGankHistory',data);
  const { type='all', pageSize=20, pageNo=1 } = data;
  return get(`${endPoint}/data/${type}/${pageSize}/${pageNo}`);
};

module.exports = {
  getGankIndex, getGankRandom, getGankHistory,
};