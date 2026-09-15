import Header from "./components/Header";
import SearchFilters from "./components/SearchFilters";
import NotebookGrid from "./components/NotebookGrid";
import { useNotebookFilter } from "./hooks/useNotebookFilter";
import notebooks from "./data/notebooks";
import orangeCodeBg from "./assets/orange_code.jpg";
import "./App.css";

export default function App() {
  const { query, setQuery, activeTag, setActiveTag, allTags, filtered } =
    useNotebookFilter(notebooks);

  return (
    <>
      <Header count={filtered.length} />

      {/* Hero banner: image bg shared by title + search */}
      <div
        className="hero-banner"
        style={{ "--hero-bg": `url(${orangeCodeBg})` }}
      >
        {/* Blurred image layer */}
        <div className="hero-banner__bg" />
        {/* Dark overlay */}
        <div className="hero-banner__overlay" />

        {/* Content on top */}
        <div className="hero-banner__content">
          <section className="hero">
            <h1 className="hero__title">My Google Colab Notebooks</h1>
            <p className="hero__subtitle">
              Collection of Notebooks on NLP, Machine Learning, Neural Networks and more...
            </p>
          </section>

          <SearchFilters
            query={query}
            onQueryChange={setQuery}
            allTags={allTags}
            activeTag={activeTag}
            onTagChange={setActiveTag}
          />
        </div>
      </div>

      <NotebookGrid notebooks={filtered} />

      <footer>
        <div className="footer__content">
        All of them were done as university projects
          <div className="footer_sign">
            Made by Julian Rendon
          </div>
        </div>
      </footer>
    </>
  );
}

