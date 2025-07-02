function asyncHandler(fn) {
  return async function (req, res, next) {
    try {
      await fn(req, res, next);
    } catch (err) {
      res.status(err.code).json({
        success: true,
        message: err.message,
      });
    }
  };
}

export default asyncHandler;
