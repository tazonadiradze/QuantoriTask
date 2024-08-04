import { useLoginContext } from "../context/login.context";

const LogIn = () => {
  const { showLogin } = useLoginContext();
  if (!showLogin) {
    return null;
  }

  return (
    <div className="flex justify-center items-center text-2xl text-green-500 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 ">
      <div className="border-4  bg-white ">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Login</h2>
        <form>
          <div className="mb-4">
            <input
              type="email"
              id="email"
              placeholder="Email"
              className="w-full p-2 border border-gray-300 rounded mt-1"
            />
          </div>
          <div className="mb-6">
            <input
              type="password"
              id="password"
              placeholder="Password"
              className="w-full p-2 border border-gray-300 rounded mt-1"
            />
          </div>
          <div className="flex justify-between">
            <button
              type="button"
              className="px-4 py-2 bg-gray-300 text-gray-700 rounded"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-green-500 text-white rounded"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LogIn;
