/* eslint-disable global-require */
module.exports = {
  theme: {
    screens: require('./commons/ui/theme/screens'),
    spacing: require('./commons/ui/theme/spacing'),
    inset: require('./commons/ui/theme/inset'),
    colors: require('./commons/ui/theme/colors'),
    fontSize: require('./commons/ui/theme/fontSize'),
    borderRadius: require('./commons/ui/theme/borderRadius'),
    fontFamily: require('./commons/ui/theme/fontFamily'),
    lineHeight: require('./commons/ui/theme/lineHeight'),
    zIndex: require('./commons/ui/theme/zIndex'),
    translate: require('./commons/ui/theme/translate'),
    opacity: require('./commons/ui/theme/opacity'),
    maxWidth: require('./commons/ui/theme/maxWidth')
  },
  corePlugins: require('./commons/ui/plugins/corePlugins'),
  plugins: require('./commons/ui/plugins/plugins')
};
