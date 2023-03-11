import "./index.css";
import Employee from "./component/Employee";
import { useState } from "react";

function App() {
  const [role, setRole] = useState("dev");
  return (
    <div className="App bg-red-300">
        <>
          <input
            type="text"
            onChange={(e) => {
              console.log(e.target.value);
              setRole(e.target.value);
            }}
          />
          <Employee name="akbar" role="Intern" />
          <Employee name="ali" role={role} />
          <Employee name="hassan" />
          <Employee name="reza" />
        </>
    </div>
  );
}

export default App;
