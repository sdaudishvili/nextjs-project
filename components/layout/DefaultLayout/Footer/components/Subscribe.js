import PropTypes from 'prop-types';
import { Input, Button } from '@/components/atoms';
import clsx from 'clsx';
import { Typography } from '@/components/molecules';

const Subscribe = (props) => {
  const { className } = props;
  return (
    <div className={clsx(className, '[ flex ]')}>
      <div className="[ flex-1 pr-2-0 ]">
        <Typography variant="subtitle2" className="[ text-secondary-text ]">
          SUBSCRIBE
        </Typography>
        <Typography variant="h2">Our Newsletter</Typography>
        <Typography className="[ mt-2-8 text-secondary-text ]">
          Praesent fermentum ligula in dui imperdiet, vel tempus nulla ultricies. Phasellus at commodo ligula.
          Nullam molestie volutp at sapien.
        </Typography>
      </div>
      <div className="[ w-60-percent pl-2-0 mt-9-0 ]">
        <div className="[ flex text-1-4 ]">
          <Input placeholder="Your e-mail" variant="outlined" className="[ flex-1 border-r-0 ]" />
          <Button>Subscribe</Button>
        </div>
      </div>
    </div>
  );
};

Subscribe.propTypes = {
  className: PropTypes.string
};

Subscribe.defaultProps = {
  className: ''
};

export default Subscribe;
