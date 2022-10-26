const timeNow = () => {
  var currentdate = new Date();
  return new Date(currentdate.getFullYear(), currentdate.getMonth(), currentdate.getDay());
};

export default timeNow;
