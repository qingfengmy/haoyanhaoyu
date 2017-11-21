
const request = (url, options) => {
  const { method, body, headers, qs, type, contentType } = options;

  return new Promise((resolve, reject) => {
    wx.request({
      url,
      method,
      data: body,
      headers,
      dataType: type,
      success: (response) => {
        //正确返回
        resolve(response.data);
      },
      //请求异常
      fail: (err) => {
        reject({ error: -1, errorMessage: '网络连接异常', data: err, request: url });
      }
    });
  });
};

export default request;
