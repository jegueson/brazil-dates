import { useEffect } from "react";

interface SchemaScriptProps {
  data: object | object[];
}

/** Injects JSON-LD structured data for rich results (Event, FAQPage, Article, etc.). */
export function SchemaScript({ data }: SchemaScriptProps) {
  useEffect(() => {
    const id = "page-schema-jsonld";
    let script = document.getElementById(id) as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement("script");
      script.id = id;
      script.type = "application/ld+json";
      document.head.appendChild(script);
    }
    const payload = Array.isArray(data) ? data : [data];
    script.textContent = JSON.stringify(
      payload.length === 1 ? payload[0] : payload
    );
    return () => {
      script?.remove();
    };
  }, [data]);

  return null;
}
