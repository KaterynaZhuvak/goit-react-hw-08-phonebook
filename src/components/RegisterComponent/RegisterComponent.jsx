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
    <form action="submit" onSubmit={onSubmit}>
      <label>
        Name
        <input type="text" name="userName" required />
      </label>
      <label>
        Email
        <input type="email" name="userEmail" required />
      </label>
      <label>
        Password
        <input type="password" name="userPassword" required />
      </label>
      <button type="submit">Sign up</button>
    </form>
  );
};
