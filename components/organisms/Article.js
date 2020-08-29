import PropTypes from 'prop-types';
import clsx from 'clsx';
import { ReadMore, Button } from '@/components/atoms';

const Article = (props) => {
  const { article, className } = props;
  return (
    <article className={clsx(className, 'container [ flex ]')}>
      <div className="[ flex-1 pr-4-0 ]">
        <h3 className="[ font-p-bd text-4-8 ]">{article.title}</h3>
        <p className="[ mt-2-7 font-m-md text-1-4 text-secondary-text leading-2-0 ]">{article.description}</p>
        <ReadMore className="[ mt-3-8 ]" />
        <Button className="[ mt-3-0 ]">Contact Us</Button>
      </div>
      <div className="[ w-60-percent pl-4-0 ]">
        <img className="[ w-full ]" src={article.image} alt={article.title} />
      </div>
    </article>
  );
};

Article.propTypes = {
  article: PropTypes.object,
  className: PropTypes.string
};

Article.defaultProps = {
  article: () => ({}),
  className: ''
};

export default Article;
