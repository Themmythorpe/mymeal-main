module.exports = {
  images: {
    domains: ['cdn.sanity.io'],
  },
  publicRuntimeConfig: {
    // Add other public runtime variables here
    NEXT_PUBLIC_STRIPE_PUBLIC_KEY: process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY,
  },
};
