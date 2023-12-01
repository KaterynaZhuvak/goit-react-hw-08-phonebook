import { NavLink, Route, Routes } from 'react-router-dom';
import CreateNewContact from 'pages/NewContact/CreateNewContact';
import MyContacts from 'pages/MyContacts/MyContacts';
import { StyledBook } from 'components/Styled';
import Login from 'pages/Login/Login';
import Register from 'pages/Register/Register';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { refreshThunk } from 'redux/Auth/auth.reducer';
import { selectAuthAuthenticated, selectAuthUserData } from 'redux/Auth/auth.selectors';

export const App = () => {
  const authenticated = useSelector(selectAuthAuthenticated);
  const userData = useSelector(selectAuthUserData)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(refreshThunk())
  }, [dispatch])
  return (
    <StyledBook>
      <div>
        <header>
          <nav>
            {authenticated ? <>
            <NavLink className="nav-link" to="/">
                  Create new contact
                </NavLink>

                <NavLink className="nav-link" to="/contacts">
                  Contacts
              </NavLink>
              <div><span>Hello {userData.name }</span>
            <button>log out</button></div></> : <>
            <NavLink className="nav-link" to="/login">
                  login
                </NavLink>

                <NavLink className="nav-link" to="/register">
                  register
            </NavLink></>}

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
