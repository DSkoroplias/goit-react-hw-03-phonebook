import PropTypes from 'prop-types';

import ContactListEl from '../ContactListEl/ContactListEl';

import styles from './contact-list.module.scss';

const ContactList = ({ removeContact, contacts }) => {
  return (
    <div className={styles.contacts}>
      {contacts.map(({ id, name, number }) => (
        <ContactListEl
          key={id}
          name={name}
          number={number}
          removeContact={() => removeContact(id)}
        />
      ))}
    </div>
  );
};

export default ContactList;

ContactList.defaultProps = {
  contacts: [],
};

ContactList.propTypes = {
  removeContact: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
