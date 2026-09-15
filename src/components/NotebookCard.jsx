import { useEffect, useRef } from "react";
import hljs from "highlight.js/lib/core";
import python from "highlight.js/lib/languages/python";
import "highlight.js/styles/atom-one-dark.css";
import "./NotebookCard.css";

hljs.registerLanguage("python", python);

function ColabIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2z"
        fill="rgba(255,255,255,0.2)"
      />
      <path d="M10 8l6 4-6 4V8z" fill="white" />
    </svg>
  );
}

export default function NotebookCard({ title, description, tags, link, code }) {
  const codeRef = useRef(null);

  useEffect(() => {
    if (codeRef.current) {
      // Prevent double-highlighting on hot reload
      delete codeRef.current.dataset.highlighted;
      hljs.highlightElement(codeRef.current);
    }
  }, [code]);

  return (
    <article className="card">
      {/* Code preview */}
      <div className="card__code">
        <div className="card__dot-bar">
          <span className="dot dot--red" />
          <span className="dot dot--yellow" />
          <span className="dot dot--green" />
        </div>
        <pre className="card__pre">
          <code ref={codeRef} className="language-python">
            {code}
          </code>
        </pre>
        <div className="card__code-fade" />
      </div>

      {/* Body */}
      <div className="card__body">
        <h2 className="card__title">{title}</h2>
        <p className="card__desc">{description}</p>

        <div className="card__tags">
          {tags.map((tag) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </div>

        <a
          className="btn-colab"
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <ColabIcon />
          Open in Colab
        </a>
      </div>
    </article>
  );
}
