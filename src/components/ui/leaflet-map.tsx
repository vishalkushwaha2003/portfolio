"use client";

import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

interface LeafletMapProps {
  lat: number;
  lng: number;
  institution: string;
  location: string;
}

export default function LeafletMap({ lat, lng, institution, location }: LeafletMapProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);

  useEffect(() => {
    if (!mapRef.current || mapInstanceRef.current) return;

    // Create map starting from a zoomed-out view
    const map = L.map(mapRef.current, {
      center: [lat, lng],
      zoom: 5,
      zoomControl: true,
      scrollWheelZoom: true,
    });

    mapInstanceRef.current = map;

    // Add OSM tile layer
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      maxZoom: 19,
    }).addTo(map);

    // Custom red marker icon
    const redIcon = L.divIcon({
      className: "",
      html: `<div style="
        width: 28px; height: 28px;
        background: #ef4444;
        border: 3px solid white;
        border-radius: 50%;
        box-shadow: 0 2px 8px rgba(0,0,0,0.3);
        display: flex; align-items: center; justify-content: center;
      ">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
          <circle cx="12" cy="10" r="3"></circle>
        </svg>
      </div>`,
      iconSize: [28, 28],
      iconAnchor: [14, 14],
      popupAnchor: [0, -16],
    });

    // Add marker
    const marker = L.marker([lat, lng], { icon: redIcon }).addTo(map);
    marker
      .bindPopup(
        `<div style="text-align:center;font-family:system-ui,sans-serif;">
          <strong style="font-size:13px;">${institution}</strong><br/>
          <span style="font-size:11px;color:#666;">${location}</span>
        </div>`,
        { closeButton: false, offset: [0, -4] }
      )
      .openPopup();

    // Add a breathing circle around the institution
    const circle = L.circle([lat, lng], {
      color: "#ef4444",
      fillColor: "#ef4444",
      fillOpacity: 0.1,
      weight: 2,
      opacity: 0.5,
      radius: 500,
    }).addTo(map);

    // Add outer glow circle
    const outerCircle = L.circle([lat, lng], {
      color: "#ef4444",
      fillColor: "#ef4444",
      fillOpacity: 0.04,
      weight: 1,
      opacity: 0.15,
      radius: 1000,
    }).addTo(map);

    // Smooth zoom-in animation after a short delay
    setTimeout(() => {
      map.flyTo([lat, lng], 16, {
        duration: 2,
        easeLinearity: 0.25,
      });
    }, 300);

    // Smooth breathing animation using requestAnimationFrame + sine wave
    let animFrameId: number;
    const minRadius = 480;
    const maxRadius = 620;
    const outerMinRadius = 950;
    const outerMaxRadius = 1100;
    const breathDuration = 3000; // 3 seconds per full breath cycle

    const animate = (timestamp: number) => {
      // Sine wave produces smooth 0→1→0 oscillation
      const t = (Math.sin((timestamp / breathDuration) * Math.PI * 2 - Math.PI / 2) + 1) / 2;

      // Interpolate radius smoothly
      const innerR = minRadius + t * (maxRadius - minRadius);
      const outerR = outerMinRadius + t * (outerMaxRadius - outerMinRadius);

      circle.setRadius(innerR);
      circle.setStyle({
        fillOpacity: 0.06 + t * 0.06,
        opacity: 0.3 + t * 0.25,
      });

      outerCircle.setRadius(outerR);
      outerCircle.setStyle({
        fillOpacity: 0.02 + t * 0.03,
        opacity: 0.1 + t * 0.1,
      });

      animFrameId = requestAnimationFrame(animate);
    };

    animFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animFrameId);
      map.remove();
      mapInstanceRef.current = null;
    };
  }, [lat, lng, institution, location]);

  return <div ref={mapRef} className="w-full h-full" />;
}
