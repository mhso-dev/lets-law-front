import React, { useCallback, useEffect, useState } from "react";
import AuthPresenter from "./AuthPresenter";
import useInput from "../../Hooks/useInput";

import { LOGIN, LOCAl_LOG_IN } from "./AuthQueries";
import { useMutation, useQuery } from "@apollo/react-hooks";
import { IS_LOGGED_IN } from "../../SharedQueries";

export default ({ history }) => {
  const {
    data: { isLoggedIn }
  } = useQuery(IS_LOGGED_IN);

  useEffect(() => {
    if (isLoggedIn) {
      window.location = "/";
    }
  }, [isLoggedIn, history]);

  const [logUserIn] = useMutation(LOCAl_LOG_IN);
  const [signInUser] = useMutation(LOGIN);
  const [action, setAction] = useState("login");
  const email = useInput("mhso.dev@kakao.com");
  const password = useInput("1111");
  const username = useInput("소민호");

  const _handleLogin = useCallback(async e => {
    e.preventDefault();

    const {
      data: { signInUser: loginData }
    } = await signInUser({
      variables: {
        email: email.value,
        password: password.value
      }
    });

    if (loginData) {
      await logUserIn({
        variables: { token: loginData.token, user: loginData.user.id }
      });
    } else {
      // 토스트 하나 띄워주고
    }

    window.location = "/";
  }, []);

  const _handleSignUp = useCallback(e => {
    e.preventDefault();
  }, []);

  return (
    <AuthPresenter
      email={email}
      password={password}
      username={username}
      _handleLogin={_handleLogin}
      _handleSignUp={_handleSignUp}
      setAction={setAction}
      action={action}
    />
  );
};
