"use client"

import { useEffect, useRef } from "react"
import L from "leaflet"
import "leaflet/dist/leaflet.css"

interface MapProps {
  markers: Array<{
    lat: number
    lng: number
    popup?: string
  }>
  center: [number, number]
  zoom: number
}

export function Map({ markers, center, zoom }: MapProps) {
  const mapRef = useRef<L.Map | null>(null)

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (!mapRef.current) {
        mapRef.current = L.map("map").setView(center, zoom)

        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        }).addTo(mapRef.current)
      }

      // Using a default Leaflet location pin icon
      const locationIcon = L.icon({
        iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png", // Default Leaflet marker icon
        iconSize: [25, 41],  // Size of the marker icon
        iconAnchor: [12, 41], // Position the icon correctly
        popupAnchor: [0, -41], // Position the popup
      })

      markers.forEach((marker) => {
        L.marker([marker.lat, marker.lng], { icon: locationIcon })
          .addTo(mapRef.current!)
          .bindPopup(marker.popup || "")
      })
    }

    return () => {
      if (mapRef.current) {
        mapRef.current.remove()
        mapRef.current = null
      }
    }
  }, [markers, center, zoom])

  return <div id="map" style={{ height: "500px", width: "100%" }} />
}
