import { useEffect, useState } from "react";
import toast from "react-hot-toast";

function App() {
  const [user, setUser] = useState(null);

  async function getUserData() {
    try {
      const res = await fetch(
        "https://randomuser.me/api/?page=1&results=1&seed=abc"
      );
      const data = await res.json();
      setUser(data.results[0]);
    } catch (error) {
      toast.error(error.message);
    }
  }

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <div className="min-h-screen flex justify-center items-center ">
      {user ? (
        <div className="border-4 border-black w-auto h-auto p-8 flex gap-6 m-4">
          <img
            src={user.picture.large}
            alt="user image"
            className="border-2 border-black"
          />
          <div className="font-semibold text-base md:text-lg flex flex-col gap-3 capitalize">
            <p>{`${user.name.first} ${user.name.last}`}</p>
            <p>{user.gender}</p>
            <p>{user.email}</p>
            <p>{user.phone}</p>
            <p>{`${user.location.city}, ${user.location.country}`}</p>
          </div>
        </div>
      ) : (
        <p>Loading user data...</p>
      )}
    </div>
  );
}

export default App;
