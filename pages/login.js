import React from "react";
import { supabase } from "../utils/supabase";

const Login = () => {
  React.useEffect(() => {
    supabase.auth.signIn({
      provider: "github",
    });
  }, []);

  return <p>Loggin in</p>;
};

export default Login;
