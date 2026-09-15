import NotebookCard from "./NotebookCard";
import "./NotebookGrid.css";

function EmptyState() {
  return (
    <div className="empty-state">
      <span className="empty-state__icon">🔍</span>
      <p>No notebooks found</p>
    </div>
  );
}

export default function NotebookGrid({ notebooks }) {
  if (notebooks.length === 0) return <EmptyState />;

  return (
    <main className="grid">
      {notebooks.map((nb) => (
        <NotebookCard key={nb.title} {...nb} />
      ))}
    </main>
  );
}
