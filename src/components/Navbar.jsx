import "./Navbar.css";

export default function Navbar() {

  return (
    <nav className="nav_bar" id="navBar">
     <div className="logo">
      <h2>LOGO</h2>
     </div>
      <ul className="menue">
        <li className="nav_item">Home</li>
        <li className="nav_item">About</li>
        <li className="nav_item">plants</li>
        <li className="nav_item">subscriptions</li>
      </ul>
     <div className="profile">
      <h2>profile image</h2>
     </div>
    </nav>
  );
}
