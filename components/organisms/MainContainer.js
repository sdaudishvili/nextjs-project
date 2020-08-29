import { Typography } from '@/components/molecules';

const MainContainer = () => {
  return (
    <div className="[ relative ]">
      <img src="/images/main-container.jpg" alt="" />
      <div className="[ absolute inset-0 text-white flex items-center justify-center flex-col ]">
        <Typography variant="subtitle1">IGI</Typography>
        <Typography variant="h1" className="[ text-center ]">
          Independent Group <br /> of Initiators
        </Typography>
      </div>
    </div>
  );
};

export default MainContainer;
