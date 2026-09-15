import "./Header.css";

export default function Header({ count }) {
  return (
    <header className="header">
      <div className="header__brand">
        <span>My Notebooks</span>
      </div>
      <span className="header__count">{count} notebook{count !== 1 ? "s" : ""}</span>
    </header>
  );
}
