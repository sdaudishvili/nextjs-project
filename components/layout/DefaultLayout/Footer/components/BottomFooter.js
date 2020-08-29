import PropTypes from 'prop-types';
import clsx from 'clsx';
import { ContactNote } from '@/components/molecules';

const Subscribe = (props) => {
  const { className, contactItems } = props;
  return (
    <div className={clsx(className, '[ grid grid-cols-12 gap-4-2 ]')}>
      <div className="[ col-span-3 ]">
        <div className="[ text-secondary-text font-m-md text-1-2 uppercase ]">
          Independent Group of Initiators
        </div>
        <div className="[ h-7-0 flex items-center mt-1-0 ]">
          <img className="[ h-full ]" src="/images/logo.png" alt="" />
          <div className="[ font-p-md text-5-0 ml-1-0 ]">IGI</div>
        </div>

        <div className="[ text-secondary-text font-m-md text-1-2 mt-1-0 ]">
          Copyright ©2020 All rights reserved!
        </div>
      </div>
      <div className="[ col-span-5 ]" />
      <ContactNote className="[ col-span-4 ]" contactItems={contactItems} />
    </div>
  );
};

Subscribe.propTypes = {
  className: PropTypes.string,
  contactItems: PropTypes.object
};

Subscribe.defaultProps = {
  className: '',
  contactItems: () => ({})
};

export default Subscribe;
