
const Validator = (schema, params) => async (req, res, next) => {
  try {
    await schema.validate(
      params === "body"
        ? req.body
        : params === "params"
        ? req.params
        : req.query,
      {
        abortEarly: false,
      }
    );
    return next();
  } catch (err) {
    return res.status(422).json({
      error: err.inner.reduce(
        (acc, error) => ({ ...acc, [error.path]: error.message }),
        {}
      ),
    });
  }
};
module.exports = { Validator };
