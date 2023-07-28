import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1 className="app-title">Love Thyself ❤️</h1>
        <br></br>
        <div className="home-btn">
          <Link to="/">🪞</Link>
        </div>

        <div className="topic-btns">
          |<Link to="/topic/inspiration">Inspiration 💭</Link> |
          <Link to="/topic/happiness">Happiness 😁</Link> |
          <Link to="/topic/confidence">Confidence 😎 </Link> |
          <Link to="/topic/truth">Truth 🤥 </Link>
        </div>
      </div>
    </nav>
  );
}
