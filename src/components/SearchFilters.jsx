import "./SearchFilters.css";

function SearchIcon() {
  return (
    <svg
      className="search__icon"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.35-4.35" />
    </svg>
  );
}

export default function SearchFilters({
  query,
  onQueryChange,
  allTags,
  activeTag,
  onTagChange,
}) {
  return (
    <div className="controls">
      <div className="search__wrap">
        <SearchIcon />
        <input
          id="search"
          className="search__input"
          type="text"
          placeholder="Search for a notebook..."
          autoComplete="off"
          value={query}
          onChange={(e) => onQueryChange(e.target.value)}
        />
      </div>

      <div className="filters">
        <button
          className={`filter-btn ${activeTag === "all" ? "filter-btn--active" : ""}`}
          onClick={() => onTagChange("all")}
        >
          All
        </button>
        {allTags.map((tag) => (
          <button
            key={tag}
            className={`filter-btn ${activeTag === tag ? "filter-btn--active" : ""}`}
            onClick={() => onTagChange(tag)}
          >
            {tag}
          </button>
        ))}
      </div>
    </div>
  );
}
