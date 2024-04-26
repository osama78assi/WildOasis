import { useState } from "react";

import Form from "../../ui/form/Form";
import Button from "../../ui/buttons/Button";
import FormRowVertical from "../../ui/form/FormRowVertical";
import Input from "../../ui/form/Input";
import Password from "../../ui/form/Password";
import SpinnerMini from "../../ui/loading/SpinnerMini";
import useLogin from "./useLogin";

function LoginForm() {
  const [email, setEmail] = useState("magolon226@hisotyr.com");
  const [password, setPassword] = useState("lili123#");
  const [errors, setErroros] = useState({});
  const { login, isLoading } = useLogin();

  function handleSubmit(e) {
    e.preventDefault();
    if (!email) {
      setErroros((obj) => {
        return { ...obj, email: "email shoudln't be empty" };
      });
    }
    if (!password) {
      setErroros((obj) => {
        return { ...obj, password: "password shouldn't be empty" };
      });
    }
    if (email && password) {
      login({ email, password });
    }
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormRowVertical label="Email address" error={errors?.email}>
        <Input
          type="email"
          id="email"
          // This makes this form better for password managers
          autoComplete="username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={isLoading}
        />
      </FormRowVertical>
      <FormRowVertical label="Password" error={errors?.password}>
        <Password disabled={isLoading}>
          <Input
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Password>
      </FormRowVertical>
      <FormRowVertical>
        <Button $size="large" disabled={isLoading}>
          {!isLoading ? "Login" : <SpinnerMini />}
        </Button>
      </FormRowVertical>
    </Form>
  );
}

export default LoginForm;
