const path = require('path');

module.exports = {
  webpack: (config) => {
    config.resolve.alias['@templates'] = path.join(__dirname, './src/templates');
    return config;
  },
  output: "export",
};
