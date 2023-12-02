import { useSelector } from 'react-redux';
import { StyledList } from './Styled';
import { ReactComponent as TrashSvg } from 'icons/trashSvg.svg';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/Contacts/contacts.reducer';

import { Filter } from 'components/Filter/Filter';
import { Loader } from 'components/Loader';
import {
  selectContactsError,
  selectContactsIsLoading,
  selectFilteredContacts,
} from 'redux/Contacts/contacts.selectors';

const pictures = [
  'https://pixabay.com/get/gf62f319fa685e280e163d09c0283f370f87efb7338801de5180cb9937db364151c94011e4e9ca8d68abd37b6723a5d42588041cfa38745e3e45a030f0688543e_640.jpg',
  'https://pixabay.com/get/g5443752cdae435442216139d3afab7a0cc59ef549d51cc8874c4811fbc79c7f0c0c70632aa17c8a5afa2c239233d615065838804f51ec16baee0fc2ba9dfcef0_640.jpg',
  'https://pixabay.com/get/g611da5a86332eabb6f5a6750cbc7d95707d3a19ffe85afd37871aea5d4477d86bfeba72ee31dbb1412a262c59d4d388834c8dc545876ce4719bf1aae59eb2eab_640.jpg',
  'https://pixabay.com/get/g6b4f20df6f47fd66236ae785869db08e5bb1cc3b7d62f4132e2db581f89d0db8a21c8ecd9e7632c42f299caa6bb65687f6ffeec8c453d0089a14b3c71aad24b5_640.jpg',
  'https://pixabay.com/get/gd2c6f313d9004bb95bba0dcdebd0473ccde0956ec91884cce3da01d2b5e9b1825ad2f1fe51aababb3e29192de915a6fcdaf2abb5eaecb637ab12cc6e076dbbd9_640.jpg',
  'https://pixabay.com/get/gda16663d8226bc2ab377007d3222079f72e43695e5c7923c558a5274d5cb951d21d966999ff6632b620da2d979674397af5dcd4c9c7d80c4700cf2c54dd251e7_640.jpg',
  'https://pixabay.com/get/g73b4a84c418a99167c6ff0c40803d191e6bde7ac09e976e7667a1a26b0f4d1ef3d7c933fa27f1b1e8243da4d9c1afda0d71e0a12d1c6e4ba411e1debb4cf4bb6_640.jpg',
  'https://pixabay.com/get/gc053b015b1b1845559cfa030cc391b47524597b153a6a4f6e464a6868052828de1be716452213680f4c6f905e29dbe025ce97a2173015eceee9116f82d4a060d_640.jpg',
  'https://pixabay.com/get/g09b8ae80f9357b297d99e25ac4d5b069d22c6ddc61e8fa48a31aee4e6e6d6fa95ca3b34f88e2d7df9c4e3904bd968e25f27c759cd2c24ed0629c574baa8e0f16_640.jpg',
  'https://pixabay.com/get/gf3c15e308e06da0ed2caa2dbadedd216a43f21b9c02d9cc2ca8f32b834af0eeabae8d05e41157058536f1546b613f4c9af873d8ad738493051d109eb4031d3ce_640.jpg',
  'https://pixabay.com/get/gbda1c9fa103cb460a2469e10a6e8cb806ad402e31bb657d5440de2ab4103754d9cf91c0b36f8c41470b6dc8cb65bfc22eb12cf95b81a2ed0f22245516e30faad_640.jpg',
  'https://pixabay.com/get/ga0e2754ce12b05705a4aa873d1105b3ff62d0dbddff4173b592b9e85388b6a1fab59a1c721e3f6a3ba625dac3373bf67_640.jpg',
  'https://pixabay.com/get/g2bcd558506e789d9cfd90f981e7cb2cbd8a8fd55cce2cd05bbdf4eab65950b0c050dce13b011b9d8ccbbf6195d1cf76d4985ba83c07a7c607af84ede123ae866_640.jpg',
  'https://pixabay.com/get/g2a3765c3af40d4053dbbe61f13316dad34bfe3e254b360704c131f1c28fac3d8bead60ecf8e9af6cb4989cc670c8d4097cad6125923739e9085045e5e8f0442c_640.jpg',
  'https://pixabay.com/get/g41484bbce098de802d91022dc2d8db95beb5d0d05cf41bcb6cf723073fe66c550961f3d08eb56c5f2c6a062dcb53f8dd25b7568c7b252becef18261bd04fc06e_640.jpg',
  'https://pixabay.com/get/ge65ccec478991035fb48d02231d6560dad5a0ffb6d8b8cd4923dd2fae0127b874bc2bcb793344dd8a7e113e38ae167da76e8aabe832ad9595b3604ba1bc19729_640.jpg',
  'https://pixabay.com/get/g6f0c3830de097115ba9231af92bea2c7cf7919a716dc00db49882729bf218bbc5c039ea0f809047a395b02467ceb9fe8837eadd149a44f6d54401f21dbdbc4a4_640.jpg',
  'https://pixabay.com/get/g5461a7c5760cefe816b4a65885a8a8da4427ae4b663484a26c72350c57b2d8ce256aea30dda5a86d678862dcda29f00de69e2842b0469abe19ba8e14a0f38e80_640.jpg',
  'https://pixabay.com/get/g8a7c633ad483a7127424a6a66eac30a7deb47aba844496e8e44c96421dbcd3b046b1bca7070d23895cb081e87c74b5b87a02c41ddfad338c0cfc1d3ed8542760_640.jpg',
  'https://pixabay.com/get/g36c7cf6bfb8acf7d85ced48b93b1e7a5cb437bc63a46e255a45e8d582ab0d3f7fe5fcfb0d49f47757f31712b495fd5ac_640.jpg',

];

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

  return (
    <StyledList>
      <Filter />

      {filteredContacts.length !== 0 ? (
        <h1 className="main-title">My contacts</h1>
      ) : (
        <p>No contacts available</p>
      )}
      {error !== null && <p>{error}</p>}
      {isLoading && <Loader />}
      <ul className="contacts-list">
        {filteredContacts.map(({ id, name, number }) => (
          <li key={id} className="list-name">
            <img className="profile-photo" src={getRandomPicture(pictures)} alt={name} />
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
          </li>
        ))}
      </ul>
    </StyledList>
  );
};
