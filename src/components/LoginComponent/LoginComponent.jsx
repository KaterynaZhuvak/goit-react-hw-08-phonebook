import { useDispatch } from "react-redux";
import { loginThunk } from "redux/Auth/auth.reducer";

export const LoginComponent = () => {
    const dispatch = useDispatch()
  const onSubmit = (e) => {
      e.preventDefault();
      const email = e.currentTarget.elements.userEmail.value;
      const password = e.currentTarget.elements.userPassword.value;
      const formData = {
          email,
          password,
      }
      dispatch(loginThunk(formData))
}
  return (
      <form action="submit" onSubmit={onSubmit}>
        <label htmlFor="">
          Email
          <input type="email" name="userEmail" required />
        </label>
        <label>
          Password
          <input type="password" name="userPassword" required />
              </label>
              <button type='submit'>Sign in</button>
      </form>
  );
};
