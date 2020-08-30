import PropTypes from 'prop-types';
import clsx from 'clsx';
import { ContactNote, Typography } from '@/components/molecules';
import BottomNavbar from './BottomNavbar';

const Subscribe = (props) => {
  const { className, contactItems } = props;
  return (
    <div className={clsx(className, '[ grid grid-cols-12 gap-4-2 ]')}>
      <div className="[ col-span-3 ]">
        <div className="[ h-7-0 flex items-center ]">
          <img className="[ h-full ]" src="/images/logo.png" alt="" />
          <Typography variant="h2" className="[ ml-1-0 ]">
            IGI
          </Typography>
        </div>
        <div className="[ text-secondary-text ]">
          <Typography variant="body2" className="[ mt-1-0 ]">
            Copyright ©2020 All rights reserved!
          </Typography>
          <Typography variant="body2" className="[ mt-1-0 ]">
            Independent Group of Initiators!
          </Typography>
        </div>
      </div>
      <div className="[ col-span-5 ]">
        <BottomNavbar />
      </div>
      <ContactNote isFooter className="[ col-span-4 text-1-4 ]" contactItems={contactItems} />
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
