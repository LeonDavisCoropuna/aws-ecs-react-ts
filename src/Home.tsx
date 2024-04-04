import { useAuth, useUser } from "@clerk/clerk-react";
import { Link } from "react-router-dom";
import axios from "./config/axiosInstance";
// import axios from "axios";
export default function IndexPage() {
  const { user } = useUser();
  const handleClickProbar = async () => {
    try {
      // Realizar la solicitud a tu backend con los encabezados configurados
      const response = await axios.get("https://jsonplaceholder.typicode.com/todos/1");
      console.log(response)
    } catch (error) {
      console.error("Error al realizar la solicitud:", error);
    }
  }
  
  return (
    <div>
      <h1>This is the index page</h1>
      {JSON.stringify(user)}
      <div>
        <ul>
          <li>
            <Link to="/sign-up">Sign Up</Link>
          </li>
          <li>
            <Link to="/sign-in">Sign In</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <button onClick={handleClickProbar}>PROBAR</button>
        </ul>
      </div>
    </div>
  );
}
