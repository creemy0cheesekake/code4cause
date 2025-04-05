import React, { useState } from "react";
import { ExternalLink } from "lucide-react";
import { Card, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpenCheck } from "lucide-react";
import "leaflet/dist/leaflet.css";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L, { LatLngExpression } from "leaflet";

const MapCard = ({ profile }) => {
	const center: LatLngExpression = [profile.location.lat, profile.location.lng];

	const randomOffset = () => 0.05 * Math.random() * (Math.random() < 0.5 ? -1 : 1);
	console.log(center);
	const locations = [
		{ id: 1, lat: center[0] + randomOffset(), lon: center[1] + randomOffset(), name: "Location 1" },
		{ id: 2, lat: center[0] + randomOffset(), lon: center[1] + randomOffset(), name: "Location 2" },
		{ id: 3, lat: center[0] + randomOffset(), lon: center[1] + randomOffset(), name: "Location 3" },
	];
	const zoom = 12;

	return (
		<section className="space-y-6">
			<Card className="flex flex-col gap-4 p-6 shadow-md bg-muted/30">
				<div className="flex items-start gap-4">
					<div style={{ height: "100%", width: "100%" }}>
						<CardTitle className="text-xl font-semibold">Map</CardTitle>
						<CardDescription className="text-sm text-muted-foreground mt-1">Map of stuf</CardDescription>

						<MapContainer center={center} zoom={zoom} scrollWheelZoom={false} style={{ height: 250 }}>
							<TileLayer
								attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
								url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
							/>
							{locations.map((loc, i) => {
								return (
									<Marker position={[loc.lat, loc.lon]} key={i}>
										<Popup>{loc.name}</Popup>
									</Marker>
								);
							})}
						</MapContainer>
					</div>
				</div>

				<div className="flex gap-3 mt-2 items-center"></div>
			</Card>
		</section>
	);
};

export default MapCard;
