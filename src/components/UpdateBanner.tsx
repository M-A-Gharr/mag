import { useEffect, useState } from "react";

export default function UpdateBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      fetch(window.location.href, { method: "HEAD", cache: "no-cache" })
        .then((response) => {
          const newLastModified = response.headers.get("last-modified");
          const storedLastModified = sessionStorage.getItem("last-modified");

          if (storedLastModified && newLastModified && storedLastModified !== newLastModified) {
            setShowBanner(true);
          }
          sessionStorage.setItem("last-modified", newLastModified || "");
        })
        .catch(console.error);
    }, 10000); // vérifie toutes les 10 secondes

    return () => clearInterval(interval);
  }, []);

  if (!showBanner) return null;

  return (
    <div className="fixed top-0 left-0 w-full bg-yellow-400 text-black text-center py-2 z-50">
      ⚡ Le site a été mis à jour. <button onClick={() => window.location.reload()} className="underline ml-2">Rafraîchir</button>
    </div>
  );
}
