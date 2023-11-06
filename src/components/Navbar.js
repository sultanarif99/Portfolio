import "./Navbar.css";
const Navbar = () =>{
  return (
    <nav>
      <h1>My Website</h1>
      <ul className="menu">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>

      <div className="rsection">
        <button className="btnLogin">Login</button>
        <button className="btnSignUp">Sign up</button>
      </div>
    </nav>
  );
}

export default Navbar;
