import { useState } from "react";
import Login from "./components/Login";
import Profile from "./components/Profile";
import { loginContext } from "./Context";

function App() {
  const [showProfile, setShowProfile] = useState(false);
  const [fullName, setFullname] = useState('');
  const [language, setLanguage] = useState('');
  const [experience, setExperience] = useState('');
  const [vacancie, setVacancie] = useState('');

  return (
    <>
      <loginContext.Provider 
      
        value={{
          fullName, language, experience, vacancie,
          setFullname, setLanguage, setExperience, setVacancie,
          setShowProfile
        }}>

        {showProfile ? <Profile /> : <Login />}

      </loginContext.Provider>
    </>
  );
}

export default App;
