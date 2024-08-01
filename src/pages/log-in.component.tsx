import { useLoginContext } from "../context/login.context";

const LogIn = () => {
  const { showLogin } = useLoginContext();

  if (!showLogin) {
    return null;
  }

  return (
    <div className="flex justify-center items-center">hello this is log in</div>
  );
};

export default LogIn;
