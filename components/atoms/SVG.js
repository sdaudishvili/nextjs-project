import PropTypes from 'prop-types';
import InlineSVG from 'react-inlinesvg';

const SVG = (props) => {
  const { className, src, original, withoutStrokes, ...rest } = props;

  const preProcessorHandler = (code) => {
    let svgData = code.replace(/(width=".*?"|height=".*?")/g, '');
    if (!original) svgData = svgData.replace(/fill=".*?"/g, 'fill="currentColor"');
    if (withoutStrokes) svgData = svgData.replace(/stroke=".*?"/g, 'stroke="currentColor"');
    return svgData;
  };

  return <InlineSVG {...rest} className={className} src={src} preProcessor={preProcessorHandler} />;
};

SVG.propTypes = {
  className: PropTypes.string,
  src: PropTypes.string,
  original: PropTypes.bool,
  withoutStrokes: PropTypes.bool
};

SVG.defaultProps = {
  className: '',
  src: '',
  original: false,
  withoutStrokes: false
};

export default SVG;
