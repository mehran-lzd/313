import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Für mein ein und alles ❤️" },
      { name: "description", content: "Eine kleine romantische Reise voller Überraschungen — nur für dich." },
      { property: "og:title", content: "Für mein ein und alles ❤️" },
      { property: "og:description", content: "Eine kleine romantische Reise voller Überraschungen." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  useEffect(() => {
    window.location.replace("/love.html");
  }, []);
  return (
    <div style={{ minHeight: "100vh", display: "grid", placeItems: "center", background: "#fff7ef", fontFamily: "serif", color: "#4a2b34" }}>
      <p>❤️ Öffne die Reise …</p>
    </div>
  );
}
