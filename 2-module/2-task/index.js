/**
 * Проверяем объект obj на пустоту
 * @param {Object} obj
 * @returns {Boolean}
 */

function isEmpty(obj) {
  if (Object.keys(obj).length === 0) {return true;}

  for (let prop in obj) {
    if (obj[prop] === undefined) {return false;}
    if (obj[prop] !== null) {return false;}

  }
}
