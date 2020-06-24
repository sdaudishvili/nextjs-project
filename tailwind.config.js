/* eslint-disable global-require */
module.exports = {
  corePlugins: {
    container: false
  },
  theme: {
    screens: require('./commons/ui/screens'),
    spacing: require('./commons/ui/spacing'),
    inset: require('./commons/ui/inset'),
    colors: require('./commons/ui/colors'),
    fontSize: require('./commons/ui/fontSize'),
    borderRadius: require('./commons/ui/borderRadius'),
    fontFamily: require('./commons/ui/fontFamily'),
    lineHeight: require('./commons/ui/lineHeight'),
    zIndex: require('./commons/ui/zIndex'),
    translate: require('./commons/ui/translate'),
    opacity: require('./commons/ui/opacity'),
    maxWidth: require('./commons/ui/maxWidth')
  },
  variants: ['responsive', 'first', 'last', 'odd', 'even', 'hover'],
  plugins: []
};
