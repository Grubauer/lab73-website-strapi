module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '16efd89cc767d29ac6e7f5016fa99da8'),
  },
});
