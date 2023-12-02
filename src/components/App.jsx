import { NavLink, Route, Routes } from 'react-router-dom';
import CreateNewContact from 'pages/NewContact/CreateNewContact';
import MyContacts from 'pages/MyContacts/MyContacts';
import { StyledBook } from 'components/Styled';
import Login from 'pages/Login/Login';
import Register from 'pages/Register/Register';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { logOutThunk, refreshThunk } from 'redux/Auth/auth.reducer';
import { selectAuthAuthenticated, selectAuthUserData } from 'redux/Auth/auth.selectors';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';

export const App = () => {
  const authenticated = useSelector(selectAuthAuthenticated);
  const userData = useSelector(selectAuthUserData)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(refreshThunk())
  }, [dispatch])

  const onLogOut = () => {
    dispatch(logOutThunk())
  }
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
            <button onClick={onLogOut}>log out</button></div></> : <>
            <NavLink className="nav-link" to="/login">
                  login
                </NavLink>

                <NavLink className="nav-link" to="/register">
                  register
            </NavLink></>}

          </nav>
        </header>

        <Routes>
          <Route path="/" element={<PrivateRoute><CreateNewContact /></PrivateRoute>} />
          <Route path="/contacts" element={<PrivateRoute><MyContacts /></PrivateRoute>} />
          
          <Route path="/login" element={<RestrictedRoute><Login /></RestrictedRoute>} />
          <Route path="/register" element={<RestrictedRoute><Register /></RestrictedRoute>} />
        </Routes>
      </div>
    </StyledBook>
  );
};
