import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nadiche Gnapakalu — Abhishek" },
      { name: "description", content: "Nadiche Gnapakalu — a digital book by Abhishek. A beautifully typeset, page-by-page reading experience." },
      { property: "og:title", content: "Nadiche Gnapakalu — Abhishek" },
      { property: "og:description", content: "A beautifully typeset digital book by Abhishek." },
      { property: "og:type", content: "book" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div style={{ position: "fixed", inset: 0, background: "#0f0b06" }}>
      <iframe
        src="/book/index.html"
        title="Nadiche Gnapakalu — Abhishek"
        style={{ width: "100%", height: "100%", border: 0, display: "block" }}
      />
    </div>
  );
}
