import { StyledLoginForm } from 'components/LoginComponent/Styled';
import { useDispatch } from 'react-redux';
import { registerThunk } from 'redux/Auth/auth.reducer';

export const RegisterComponent = () => {
  const dispatch = useDispatch();
  const onSubmit = e => {
    e.preventDefault();

    const name = e.currentTarget.elements.userName.value;
    const email = e.currentTarget.elements.userEmail.value;
    const password = e.currentTarget.elements.userPassword.value;
    const formData = {
      name,
      email,
      password,
    };
    console.log(formData);
    dispatch(registerThunk(formData));
  };
  return (
    <StyledLoginForm className="container">
      <p className="title">Please register your account!</p>
      <form action="submit" onSubmit={onSubmit}>
        <label>
          <input type="text" name="userName" placeholder="Kateryna" required />
        </label>
        <label>
          <input
            type="email"
            name="userEmail"
            placeholder="kateryna@gmail.com"
            required
          />
        </label>
        <label>
          <input
            type="password"
            name="userPassword"
            placeholder="*******"
            minLength="7"
            required
          />
        </label>
        <button className="btn-log" type="submit">
          Sign up
        </button>
      </form>
    </StyledLoginForm>
  );
};
