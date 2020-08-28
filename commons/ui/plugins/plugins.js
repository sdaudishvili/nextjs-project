const plugins = [
  ({ addComponents }) => {
    addComponents({
      '.container': {
        maxWidth: '1140px',
        margin: '0 auto',
        width: '100%',
        paddingRight: '15px',
        paddingLeft: '15px'
      }
    });
  }
];

module.exports = plugins;
