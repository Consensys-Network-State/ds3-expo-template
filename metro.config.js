const { getDefaultConfig } = require('expo/metro-config');
const { withCui } = require('@consensys/ui-config/metro');

const config = getDefaultConfig(__dirname);

module.exports = withCui(config);
