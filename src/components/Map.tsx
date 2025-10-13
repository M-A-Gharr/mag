
import { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { useTranslation } from 'react-i18next';

// Note: In a production environment, you should store this key
// in a server-side environment variable
const MAPBOX_TOKEN = "YOUR_MAPBOX_TOKEN";

const Map = () => {
  const { t } = useTranslation();
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapboxToken, setMapboxToken] = useState<string>(MAPBOX_TOKEN);
  const [tokenInput, setTokenInput] = useState<string>("");
  const [showTokenInput, setShowTokenInput] = useState<boolean>(MAPBOX_TOKEN === "YOUR_MAPBOX_TOKEN");

  useEffect(() => {
    if (!mapContainer.current || !mapboxToken || mapboxToken === "YOUR_MAPBOX_TOKEN") return;

    mapboxgl.accessToken = mapboxToken;
    
    try {
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/dark-v11',
        center: [2.3522, 48.8566], // Paris
        zoom: 12,
        attributionControl: false,
      });

      // Add marker
      new mapboxgl.Marker({ color: '#9b87f5' })
        .setLngLat([2.3522, 48.8566])
        .addTo(map.current);

      // Add navigation controls
      map.current.addControl(
        new mapboxgl.NavigationControl({
          showCompass: false,
        }),
        'bottom-right'
      );

      // Disable scroll zoom to avoid conflicts with page scrolling
      map.current.scrollZoom.disable();
    } catch (error) {
      console.error("Error initializing map:", error);
    }

    return () => {
      if (map.current) {
        map.current.remove();
        map.current = null;
      }
    };
  }, [mapboxToken]);

  const handleTokenSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (tokenInput.trim()) {
      setMapboxToken(tokenInput.trim());
      setShowTokenInput(false);
    }
  };

  return (
    <div className="relative w-full h-full">
      {showTokenInput ? (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-secondary/30 p-4 z-10 rounded-xl">
          <p className="text-sm text-foreground/80 mb-4 text-center">
            {t('map.tokenMessage', 'To display the map, please enter your Mapbox public token')}
          </p>
          <form onSubmit={handleTokenSubmit} className="w-full max-w-sm flex space-x-2">
            <input
              type="text"
              value={tokenInput}
              onChange={(e) => setTokenInput(e.target.value)}
              placeholder={t('map.tokenPlaceholder', 'Enter your Mapbox token')}
              className="flex-1 px-3 py-2 bg-background border border-input rounded-md text-sm"
            />
            <button
              type="submit"
              className="px-3 py-2 bg-[#483dfb] hover:bg-[#483dfb]-dark text-white rounded-md text-sm transition-colors"
            >
              {t('map.submit', 'Submit')}
            </button>
          </form>
          <p className="text-xs text-foreground/60 mt-2 text-center">
            {t('map.getToken', 'You can get a token at')} <a href="https://account.mapbox.com" target="_blank" rel="noopener noreferrer" className="text-[#483dfb] hover:underline">mapbox.com</a>
          </p>
        </div>
      ) : null}
      <div ref={mapContainer} className="absolute inset-0 rounded-xl" />
    </div>
  );
};

export default Map;
