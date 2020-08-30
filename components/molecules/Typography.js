import PropTypes from 'prop-types';
import clsx from 'clsx';

const variantsSet = {
  h1: 'text-10-0 font-p-md',
  h2: 'text-4-8 font-p-bd',
  h3: 'text-2-4 font-p-bd',
  h4: 'text-4-0 font-p-bd',
  h5: 'text-3-0 font-p-bd',
  h6: 'text-2-3 font-p-bd',
  subtitle1: 'text-1-4 font-m-sbd tracking-subtitle',
  subtitle2: 'text-1-2 font-m-sbd tracking-subtitle',
  body1: 'text-1-4 font-m-md',
  body2: 'text-1-2 font-m-md'
};

const leadingsSet = {
  h1: 'leading-h1',
  h2: 'leading-h2',
  h3: 'leading-h3',
  h4: 'leading-h4',
  h5: 'leading-h5',
  h6: 'leading-h6',
  subtitle1: 'leading-subtitle1',
  subtitle2: 'leading-subtitle2',
  body1: 'leading-2-0',
  body2: 'leading-1-2'
};

const Typography = (props) => {
  const { span, variant, leading, className, upper, lineClamp, children, ...rest } = props;

  // eslint-disable-next-line no-nested-ternary
  const Component = span
    ? 'span'
    : variant === 'body1' || variant === 'body2' || variant === 'subtitle1' || variant === 'subtitle2'
    ? 'p'
    : variant;
  const calculatedLeading = leading ? `leading-${leading}` : leadingsSet[variant];

  return (
    <Component
      className={clsx(
        { [variantsSet[variant]]: variant, uppercase: upper, 'l-c': lineClamp },
        calculatedLeading,
        className
      )}
      {...rest}
    >
      {children}
      <style jsx>{`
        @mixin line-clamp($count) {
          display: -webkit-box;
          -webkit-line-clamp: $count;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .l-c {
          @include line-clamp(${lineClamp});
        }
      `}</style>
    </Component>
  );
};

Typography.propTypes = {
  className: PropTypes.string,
  span: PropTypes.bool,
  variant: PropTypes.oneOf(Object.keys(variantsSet)),
  leading: PropTypes.string,
  upper: PropTypes.bool,
  lineClamp: PropTypes.number,
  children: PropTypes.node
};

Typography.defaultProps = {
  className: '',
  span: false,
  variant: 'body1',
  leading: null,
  upper: false,
  lineClamp: null,
  children: null
};

export default Typography;
