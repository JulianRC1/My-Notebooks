import { useState, useMemo } from "react";

/**
 * useNotebookFilter
 * Devuelve el estado de búsqueda / tag activo y la lista filtrada.
 */
export function useNotebookFilter(notebooks) {
  const [query, setQuery] = useState("");
  const [activeTag, setActiveTag] = useState("all");

  const allTags = useMemo(() => {
    const set = new Set();
    notebooks.forEach((nb) => nb.tags.forEach((t) => set.add(t.toLowerCase())));
    return Array.from(set);
  }, [notebooks]);

  const filtered = useMemo(() => {
    return notebooks.filter((nb) => {
      const tagOk =
        activeTag === "all" ||
        nb.tags.map((t) => t.toLowerCase()).includes(activeTag);
      const q = query.trim().toLowerCase();
      if (!q) return tagOk;
      const haystack =
        `${nb.title} ${nb.description} ${nb.tags.join(" ")}`.toLowerCase();
      return tagOk && haystack.includes(q);
    });
  }, [notebooks, query, activeTag]);

  return { query, setQuery, activeTag, setActiveTag, allTags, filtered };
}
