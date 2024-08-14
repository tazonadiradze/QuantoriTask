import { useAuth } from "../components/store/auth.context";

export default function About() {
  const { userData } = useAuth();

  if (!userData) {
    return null;
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-md w-full">
        <div className="flex items-center mb-4">
          <img
            src={userData.image}
            alt={`${userData.firstName} ${userData.lastName}`}
            className="w-20 h-20 rounded-full mr-4"
          />
          <div>
            <h2 className="text-xl font-bold">
              {userData.firstName} {userData.lastName}
            </h2>
            <p className="text-gray-600">@{userData.username}</p>
          </div>
        </div>
        <div className="mb-4">
          <p className="text-gray-800">
            <span className="font-semibold">Email:</span> {userData.email}
          </p>
          <p className="text-gray-800">
            <span className="font-semibold">Gender:</span> {userData.gender}
          </p>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg">
          <p className="text-gray-700">
            <span className="font-semibold">ID:</span> {userData.id}
          </p>
          <p className="text-gray-700 break-all">
            <span className="font-semibold">Token:</span> {userData.token}
          </p>
          <p className="text-gray-700 break-all">
            <span className="font-semibold">Refresh Token:</span>{" "}
            {userData.refreshToken}
          </p>
        </div>
      </div>
    </div>
  );
}
