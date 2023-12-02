import { useDispatch } from 'react-redux';
import { loginThunk } from 'redux/Auth/auth.reducer';
import { StyledLoginForm } from './Styled';

export const LoginComponent = () => {
  const dispatch = useDispatch();
  const onSubmit = e => {
    e.preventDefault();
    const email = e.currentTarget.elements.userEmail.value;
    const password = e.currentTarget.elements.userPassword.value;
    const formData = {
      email,
      password,
    };
    dispatch(loginThunk(formData));
  };
  return (
    <StyledLoginForm>
      <p className="title">Welcome!</p>
      <form action="submit" onSubmit={onSubmit}>
        <label>
          Email:
          <input type="email" name="userEmail" placeholder='kateryna@gmail.com' required />
        </label>
        <label>
          Password:
          <input type="password" name="userPassword" placeholder='*******' required />
        </label>
        <button type="submit">Sign in</button>
      </form>
    </StyledLoginForm>
  );
};
