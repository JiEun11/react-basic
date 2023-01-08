import "./App.css";

function AppJSX() {
  const name = "Bella";
  const list = ["우유", "딸기", "바나나", "오트밀"];
  return (
    <>
      <h1 className="orange">{`Hello! ${name}`}</h1>
      <h2>Hello!</h2>
      <p>{name}</p>
      <ul>
        {list.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
      <img
        style={{ width: "200px", height: "200px" }}
        src="http://images.unsplash.com"
        alt="nature"
      />
    </>
  );
}

export default AppJSX;
