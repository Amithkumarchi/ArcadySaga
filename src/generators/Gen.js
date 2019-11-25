let Gen = function*() {
  let data = yield 5;
  return data + 5;
};

export default Gen;
