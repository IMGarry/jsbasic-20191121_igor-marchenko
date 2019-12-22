/**
 * Клонируем объект
 * @param {Object} obj - клонируем объект
 * @returns {Object}
 */
function clone(obj) {
  let cloneObj = {};
  for (key in obj) {
    if (null == obj[key]) {
      cloneObj[key] = null;
      continue;
    }
    if (typeof (obj[key]) == 'object') {
      cloneObj[key] = {};
      for (let newKey in obj[key]) {
        cloneObj[key][newKey] = clone(obj[key][newKey]);
      }
    } else {
      cloneObj[key] = obj[key];
    }
  }
  return cloneObj;
}
