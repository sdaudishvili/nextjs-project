import React from 'react';
import PropTypes from 'prop-types';

const generateElement = (e, i) => (
  <div className="[ p-2-0 border-solid border-b border-border-secondary ] col-md-10" key={i.toString()}>
    {e}
  </div>
);

const Page = (props) => {
  const { pageTitle, bodyElems } = props;
  return (
    <main id="main" role="main">
      <h1 className="[ px-3-0 mt-2-0 text-3-0 ]">{pageTitle}</h1>
      <section className="box-shadow [ bg-white text-1-5 ]">
        <div className="[ py-2-0 px-3-0 border-solid border-b border-border-secondary ]">Information</div>
        <div className="[ px-3-0 ]">{bodyElems.map(generateElement)}</div>
      </section>
    </main>
  );
};

Page.propTypes = {
  pageTitle: PropTypes.string,
  bodyElems: PropTypes.instanceOf(Array)
};

Page.defaultProps = {
  pageTitle: '',
  bodyElems: []
};

export default Page;
