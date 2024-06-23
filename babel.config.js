module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: ['nativewind/babel','react-native-reanimated/plugin'],
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@src': './src',
        },
      },
    ],
    'react-native-reanimated/plugin'  // Make sure this is the last plugin
  ],
};
