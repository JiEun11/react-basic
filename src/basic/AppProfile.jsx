import "./App.css";
import Avatar from "./components/Avatar";
import Profile from "./components/Profile";

function AppProfile() {
  const handleClick = (event) => {
    console.log(event);
    alert("button");
  };
  return (
    <>
      <button onClick={handleClick}>버튼</button>
      <Avatar
        image="https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        isNew={true}
      />

      <Profile
        image="https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        name="Bella jin"
        title="Front-End developer"
        isNew={true}
      />
      <Profile
        image="https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZGV2ZWxvcGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
        name="Sarah"
        title="STU of Master degree"
      />
      <Profile
        image="https://images.unsplash.com/photo-1534040385115-33dcb3acba5b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fENhZmV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
        name="Bella Jin"
        title="Cafe Owner"
      />
    </>
  );
}

export default AppProfile;
