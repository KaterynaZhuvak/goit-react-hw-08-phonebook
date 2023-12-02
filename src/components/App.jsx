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
            {authenticated ? <div >
            <NavLink className="nav-link" to="/">
                  Create new contact
                </NavLink>

                <NavLink className="nav-link" to="/contacts">
                  Contacts
              </NavLink>
              <div>
            <button className='button-log-out' onClick={onLogOut}>log out</button></div></div> : <div>
            <NavLink className="nav-link" to="/login">
                  login
                </NavLink>

                <NavLink className="nav-link" to="/register">
                  register
            </NavLink></div>}

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
