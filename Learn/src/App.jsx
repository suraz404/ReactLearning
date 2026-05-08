// import UseState from "./components/UseState";

import UpdateUser from "../UpdateUser";
import UserProvider from "../UserContext";
import UserProfile from "../UserProfile";

// import FetchDataEffects from "./components/FetchDataEffects";s

// import CounterEffects from "./components/CounterEffects";

// import CopyInput from "./components/CopyInput";

// import ShoppingLists from "./components/ShoppingLists";

// import Profile from "./components/Profile";

// import LocalStorage from "./components/LocalStorage";
// import TodoList from "./components/TodoList";

const App = () => {
  return (
    <UserProvider>
      <div>
        {/* <Weather temp={23} /> */}
        {/* <UseState /> */}
        {/* <LocalStorage /> */}
        {/* <TodoList /> */}
        {/* <Profile /> */}
        {/* <ShoppingLists /> */}
        {/* <CopyInput /> */}
        {/* <CounterEffects /> */}
        {/* <FetchDataEffects /> */}
        <UserProfile />
        <UpdateUser />
      </div>
    </UserProvider>
  );
};

export default App;
