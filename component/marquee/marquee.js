
export default {
  getWidth:(str)=>{
    return [].reduce.call(str, (pre, cur, index, arr) => {
      if (str.charCodeAt(index) > 255) {
        pre++;
      } else {
        pre += 0.5;
      }
      return pre;
    }, 0);
  },
  getDuration:(str)=>{
    return this.getWidth()/10;
  }
}


// const str = this.data.marquee.text;
// const width = this.getWidth(str);
// console.log('width', width);
// this.setData({ [`${'marquee'}.width`]: width });