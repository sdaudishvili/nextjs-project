import { ShareIcon } from '@/components/icons';
import SVG from './SVG';

const Share = () => {
  return (
    <div className="[ text-1-6 font-p-md-it flex items-center duration-200 ]">
      <div>Share</div>
      <SVG src={ShareIcon} className="w-1-5 ml-2-0" />
    </div>
  );
};

export default Share;
