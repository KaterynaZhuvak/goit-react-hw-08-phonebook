import { NavLink, Route, Routes } from 'react-router-dom';
import CreateNewContact from 'pages/NewContact/CreateNewContact';
import MyContacts from 'pages/MyContacts/MyContacts';
import { StyledBook } from 'components/Styled';
import Login from 'pages/Login/Login';
import Register from 'pages/Register/Register';

export const App = () => {
  return (
    <StyledBook>
      <div>
        <header>
          <nav>
            <ul>
              <li>
                <NavLink className="nav-link" to="/">
                  Create new contact
                </NavLink>
              </li>
              <li>
                <NavLink className="nav-link" to="/contacts">
                  Contacts
                </NavLink>
              </li>
              <li>
                <NavLink className="nav-link" to="/login">
                  login
                </NavLink>
              </li>
              <li>
                <NavLink className="nav-link" to="/register">
                  register
                </NavLink>
              </li>
            </ul>
          </nav>
        </header>

        <Routes>
          <Route path="/" element={<CreateNewContact />} />
          <Route path="/contacts" element={<MyContacts />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </StyledBook>
  );
};
