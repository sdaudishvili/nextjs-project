import PropTypes from 'prop-types';
import clsx from 'clsx';
import { motion } from 'framer-motion';

const IconButton = (props) => {
  const { Component, children, className, ...rest } = props;
  return (
    <motion.div className="w-mc" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      <Component className={clsx(className, 'cursor-pointer')} {...rest}>
        {children}
      </Component>
    </motion.div>
  );
};

IconButton.propTypes = {
  Component: PropTypes.any,
  children: PropTypes.node,
  className: PropTypes.string
};

IconButton.defaultProps = {
  Component: 'div',
  children: null,
  className: ''
};

export default IconButton;
