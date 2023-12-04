import { useSelector } from 'react-redux';
import { StyledList } from './Styled';
import { ReactComponent as TrashSvg } from 'icons/trashSvg.svg';
import { ReactComponent as HeartSvg } from 'icons/heart.svg';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/Contacts/contacts.reducer';

import { Filter } from 'components/Filter/Filter';
import { Loader } from 'components/Loader';
import {
  selectContactsError,
  selectContactsIsLoading,
  selectFilteredContacts,
} from 'redux/Contacts/contacts.selectors';
import { pictures } from './pictures';

export const ContactsList = () => {
  const dispatch = useDispatch();

  const isLoading = useSelector(selectContactsIsLoading);
  const error = useSelector(selectContactsError);
  const filteredContacts = useSelector(selectFilteredContacts);

  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  function getRandomPicture(pictures) {
    var randomPicture = pictures[Math.floor(Math.random() * pictures.length)];
    return randomPicture;
  }

  const onFavorite = e => {
    const favoriteContact = e.currentTarget;
    favoriteContact.classList.toggle('favorite');
  };

  return (
    <StyledList>
      <div className="container">
        <Filter />

        {filteredContacts.length !== 0 ? (
          <h1 className="main-title">My contacts</h1>
        ) : (
          <p className="no-contacts-title">No contacts available</p>
        )}
        {error !== null && <p>{error}</p>}
        {isLoading && <Loader />}
        <ul className="contacts-list">
          {filteredContacts.map(({ id, name, number }) => (
            <li key={id} className="list-name">
              <img
                className="profile-photo"
                src={getRandomPicture(pictures)}
                alt={name}
              />
              <div>
                <p>{name}:</p>
                <p>{number}</p>
              </div>

              <button
                className="remove-btn"
                type="button"
                onClick={() => handleDeleteContact(id)}
              >
                <TrashSvg />
              </button>
              <button onClick={onFavorite} className="favorite-btn">
                <HeartSvg />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </StyledList>
  );
};
