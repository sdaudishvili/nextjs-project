import PropTypes from 'prop-types';

const ContactNote = (props) => {
  const { contactItems, isFooter, ...rest } = props;
  return (
    <ul {...rest}>
      <li className="[ mb-1-5 font-m-md ]">
        {isFooter && <span className="[ text-secondary-text ]">Address: </span>}
        <span>{contactItems.address}</span>
      </li>
      <li className="[ mb-1-5 font-m-md ]">
        {isFooter && <span className="[ text-secondary-text ]">Phone: </span>}
        <span>{contactItems.phone}</span>
      </li>
      <li className="[ mb-1-5 font-m-md ]">
        {isFooter && <span className="[ text-secondary-text ]">Email: </span>}
        <span>{contactItems.email}</span>
      </li>
    </ul>
  );
};

ContactNote.propTypes = {
  contactItems: PropTypes.object,
  isFooter: PropTypes.bool
};

ContactNote.defaultProps = {
  contactItems: () => ({}),
  isFooter: false
};

export default ContactNote;
