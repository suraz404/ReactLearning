import { useState } from "react";

const Profile = () => {
  const [profile, setProfile] = useState({
    name: "",
    age: "",
  });
  const handleProfile = (e) => {
    const { name, value } = e.target;

    setProfile((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div>
      <label>Name :</label>
      <input
        type="text"
        name="name"
        value={profile.name}
        onChange={handleProfile}
      />
      <label>Age :</label>
      <input
        type="text"
        name="age"
        value={profile.age}
        onChange={handleProfile}
      />
      <br />
      Name:{profile.name}
      <h1>Age :{profile.age}</h1>
    </div>
  );
};

export default Profile;
