import React, { useState, useEffect, useMemo } from "react";
import { ExternalLink } from "lucide-react";
import { Card, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpenCheck } from "lucide-react";
import "leaflet/dist/leaflet.css";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L, { LatLngExpression } from "leaflet";

const MapCard = ({ profile }) => {
	const center = [profile.location.lat, profile.location.lng];
	const randomOffset = () => 0.05 * Math.random() * (Math.random() < 0.5 ? -1 : 1);
	const volunteeringPlaces = [
		"AmeriCorps",
		"Habitat for Humanity",
		"American Red Cross",
		"National Park Service",
		"YMCA",
		"Volunteers of America",
		"Global Volunteers",
		"VolunteerMatch",
		"Peace Corps",
		"Youth Service America (YSA)",
		"National Volunteer Outreach Network (NVON)",
		"United Nations Volunteers (UNV)",
		"Ignatian Volunteer Corps (IVC)",
		"ICVolunteers",
		"American Youth Understanding Diabetes Abroad (AYUDA)",
		"Globe Aware",
		"Global Brigades",
		"Good Hope Volunteers",
		"International Service Learning (ISL)",
		"Projects Abroad",
		"Jesuit Volunteer Corps",
		"Lutheran Volunteer Corps",
		"Points of Light",
		"Air Care Alliance",
		"Engineers Without Borders USA",
		"Financial Services Volunteer Corps",
		"Florida Association for Volunteer Action in the Caribbean and Americas",
		"Idealist",
	];
	const pickRandom = (arr, num) => {
		const result = [];
		const tempArray = [...arr];
		for (let i = 0; i < num; i++) {
			const randomIndex = Math.floor(Math.random() * tempArray.length);
			result.push(tempArray.splice(randomIndex, 1)[0]);
		}
		return result;
	};

	const locations = [
		{ id: 1, lat: center[0] + randomOffset(), lon: center[1] + randomOffset(), name: "Location 1" },
		{ id: 2, lat: center[0] + randomOffset(), lon: center[1] + randomOffset(), name: "Location 2" },
		{ id: 3, lat: center[0] + randomOffset(), lon: center[1] + randomOffset(), name: "Location 3" },
	];
	const volPlaces = pickRandom(volunteeringPlaces, locations.length);
	for (const p in volPlaces) {
		locations[p].name = volPlaces[p];
	}
	const zoom = 11;

	return (
		<section className="space-y-6">
			<Card className="flex flex-col gap-4 p-6 shadow-md bg-muted/30">
				<div className="flex items-start gap-4">
					<div style={{ height: "100%", width: "100%" }}>
						<CardTitle className="text-xl font-semibold">{profile.location.city}</CardTitle>
						<CardDescription className="text-sm text-muted-foreground mt-1">
							Volunteering Opportunities
						</CardDescription>

						<MapContainer
							// dont question it, it works
							key={Math.random()}
							center={center}
							zoom={zoom}
							scrollWheelZoom={false}
							style={{ height: 250 }}
							className="z-0"
						>
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
