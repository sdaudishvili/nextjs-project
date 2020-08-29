import PropTypes from 'prop-types';
import { SVG, IconButton, IconCircle } from '@/components/atoms';
import { FacebookIcon, InstagramIcon, TwitterIcon } from '@/components/icons';

import clsx from 'clsx';

const iconButtonClassSet = 'w-4-2 h-4-2 hover:text-primary-hover duration-300';

const SocialIcons = (props) => {
  const { className } = props;
  return (
    <div className={clsx(className, 'grid grid-cols-3 gap-3-2 w-mc')}>
      <IconButton className={iconButtonClassSet} Component={IconCircle}>
        <SVG className="w-0-7" src={FacebookIcon} />
      </IconButton>
      <IconButton className={iconButtonClassSet} Component={IconCircle}>
        <SVG className="w-1-5" src={InstagramIcon} />
      </IconButton>
      <IconButton className={iconButtonClassSet} Component={IconCircle}>
        <SVG className="w-1-8" src={TwitterIcon} />
      </IconButton>
    </div>
  );
};

SocialIcons.propTypes = {
  className: PropTypes.string
};

SocialIcons.defaultProps = {
  className: ''
};

export default SocialIcons;
