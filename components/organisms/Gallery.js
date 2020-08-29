import PropTypes from 'prop-types';
import { Swiper, SwiperSlide } from 'swiper/react';
import clsx from 'clsx';

const swiperOptions = {
  spaceBetween: 24,
  slidesPerView: 3,
  loop: true
};

const Gallery = (props) => {
  const { items, className } = props;
  return (
    <div className={clsx(className, 'overflow--visible [ py-13-2 bg-slider px-27-5 ]')}>
      <Swiper style={{ overflow: 'visible' }} {...swiperOptions}>
        {items.map((x) => (
          <SwiperSlide key={x}>
            <div className="hover-item [ relative cursor-pointer ]">
              <img src={x} alt="" className="[ w-full ]" />
              <div className="hover-item__bg [ absolute inset-0 border-primary-hover border-solid border-2 duration-500 opacity-0 pointer-events-none flex items-center justify-center ]">
                <div className="[ w-5-0 h-5-0 flex items-center justify-center bg-primary text-primary-hover text-3-0 ]">
                  +
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <style jsx>{`
        .hover-item {
          $self: &;
          &__bg {
            background: rgba(0, 0, 0, 0.62);
          }
          &:hover {
            #{$self}__bg {
              @apply opacity-100 pointer-events-auto;
            }
          }
        }
      `}</style>
    </div>
  );
};

Gallery.propTypes = {
  items: PropTypes.instanceOf(Array).isRequired,
  className: PropTypes.string
};

Gallery.defaultProps = {
  className: ''
};

export default Gallery;
