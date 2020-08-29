import PropTypes from 'prop-types';
import clsx from 'clsx';

const PageHeader = (props) => {
  const { title, className } = props;
  return (
    <div className={clsx(className, '[ relative  ]')}>
      <img src="/images/bg.jpg" alt="" />
      <div className="[ absolute inset-0 flex items-center justify-center ]">
        <h2 className="[ text-white text-5-0 font-p-bd ]">{title}</h2>
      </div>
    </div>
  );
};

PageHeader.propTypes = {
  title: PropTypes.string,
  className: PropTypes.string
};

PageHeader.defaultProps = {
  title: '',
  className: ''
};

export default PageHeader;
