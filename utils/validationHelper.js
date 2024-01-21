// .......password pattern....//
module.exports.passwordPattern = new RegExp(
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/
);
//......mongoIdPattern........//
module.exports.mongoIdPattern = new RegExp(/^[a-f\d]{24}$/);
