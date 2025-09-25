"use client";

import React, { useState } from "react";
import Link from "next/link";
import Map, { PointOfInterest } from "./Map";
import Sidebar from "./Sidebar";

const maps: { image: string; points: PointOfInterest[] }[] = [
  {
    image: "/images/internet/2014_0006_005.jpg",
    points: [
      { 
        x: 34.5, 
        y: 47, 
        label: "Jenny Graves Building", 
        info: "Location: Bundoora campus, La Trobe University — Jenny Graves (formerly Thomas Cherry Building)\nFounding / Built: 1960s (original construction)\nFounder / Architect / Benefactor: Renamed in honour of Professor Jenny Graves, distinguished geneticist\nInteresting Notes: Constructed in the 1960s, this building was renamed in honour of geneticist Professor Jenny Graves. It has recently been redeveloped as part of La Trobe’s Innovation Precinct. Today, it houses the Bio Innovation Hub, Student Services Hub, Digital Innovation Hub, and PC2 laboratories. The upgrade included seismic strengthening, sustainability improvements, and modernised facilities to support research and innovation."
      },
      { 
        x: 47.5, 
        y: 30, 
        label: "John Scott Meeting House", 
        info: "Location: Bundoora campus, La Trobe University — behind Car Park 7\nFounding / Built: 1993\nFounder / Architect / Benefactor: Named for John Scott\nInteresting Notes: The John Scott Meeting House serves as a central space for meetings, conferences, and university events. It houses the Graduate Research School and dedicated meeting rooms. Upgrades have enhanced acoustics and audiovisual systems, improving the experience for formal gatherings. Located behind Car Park 7, it is an important venue for both academic and community functions."
      },
      { 
        x: 29, 
        y: 20, 
        label: "Graduate House West", 
        info: "Location: Bundoora campus, La Trobe University — Graduate House West (NR7) building\nFounding / Built: flooring was built in 1999, floors in 2000\nFacilities: Common/TV rooms per floor; shared kitchens; lounge areas; gazebo & BBQ yard; outdoor social spaces\nInteresting Notes: Graduate House West provides accommodation for postgraduate and mature-age students, including couples. Designed in a collegiate style, it offers shared kitchens, lounge areas, and outdoor spaces with a gazebo and BBQ facilities. Situated on La Trobe’s Bundoora campus, it is known for its supportive community environment and quiet atmosphere, popular among graduate students seeking a focused residential setting."
      },
      { 
        x: 32, 
        y: 50, 
        label: "Bronze Pyramid", 
        info: "Location: Bundoora campus, La Trobe University — near the Thomas Cherry / Jenny Graves building, by the bus stops\nFounding / Built: Sculpted in stages during 1980, 1982, 1983; unveiled 29 March 1997\nFounder / Artist / Benefactor: Artist: Bart Sanciolo; Gifted by the Italian community of Victoria.\nInteresting Notes: Three-sided bronze pyramid reflecting Hell, Purgatory, and Paradise. A gift to the people of Australia by the Italian community. Often used as a campus landmark to orient visitors."
      },
    ],
  },
  {
    image: "/images/2012/LTU_Media_11448.jpg",
    points: [
      { 
        x: 63, 
        y: 41, 
        label: "Jenny Graves Building", 
        info: "Location: Bundoora campus, La Trobe University — Jenny Graves (formerly Thomas Cherry Building)\nFounding / Built: 1960s (original construction)\nFounder / Architect / Benefactor: Renamed in honour of Professor Jenny Graves, distinguished geneticist\nInteresting Notes: Constructed in the 1960s, this building was renamed in honour of geneticist Professor Jenny Graves. It has recently been redeveloped as part of La Trobe’s Innovation Precinct. Today, it houses the Bio Innovation Hub, Student Services Hub, Digital Innovation Hub, and PC2 laboratories. The upgrade included seismic strengthening, sustainability improvements, and modernised facilities to support research and innovation."
      },
      { 
        x: 7, 
        y: 95, 
        label: "John Scott Meeting House", 
        info: "Location: Bundoora campus, La Trobe University — behind Car Park 7\nFounding / Built: 1993\nFounder / Architect / Benefactor: Named for John Scott\nInteresting Notes: The John Scott Meeting House serves as a central space for meetings, conferences, and university events. It houses the Graduate Research School and dedicated meeting rooms. Upgrades have enhanced acoustics and audiovisual systems, improving the experience for formal gatherings. Located behind Car Park 7, it is an important venue for both academic and community functions."
      },
      { 
        x: 70, 
        y: 40, 
        label: "Bus Stops", 
        info: "Location: Bundoora campus, La Trobe University — Bus stops"
      },
      { 
        x: 65, 
        y: 39, 
        label: "Bronze Pyramid", 
        info: "Location: Bundoora campus, La Trobe University — near the Thomas Cherry / Jenny Graves building, by the bus stops\nFounding / Built: Sculpted in stages during 1980, 1982, 1983; unveiled 29 March 1997\nFounder / Artist / Benefactor: Artist: Bart Sanciolo; Gifted by the Italian community of Victoria.\nInteresting Notes: Three-sided bronze pyramid reflecting Hell, Purgatory, and Paradise. A gift to the people of Australia by the Italian community. Often used as a campus landmark to orient visitors."
      },
    ],
  },
  {
    image: "/images/internet/DlqvQYDXoAEBkxX.jpg",
    points: [
      { 
        x: 32, 
        y: 53, 
        label: "Jenny Graves Building", 
        info: "Location: Bundoora campus, La Trobe University — Jenny Graves (formerly Thomas Cherry Building)\nFounding / Built: 1960s (original construction)\nFounder / Architect / Benefactor: Renamed in honour of Professor Jenny Graves, distinguished geneticist\nInteresting Notes: Constructed in the 1960s, this building was renamed in honour of geneticist Professor Jenny Graves. It has recently been redeveloped as part of La Trobe’s Innovation Precinct. Today, it houses the Bio Innovation Hub, Student Services Hub, Digital Innovation Hub, and PC2 laboratories. The upgrade included seismic strengthening, sustainability improvements, and modernised facilities to support research and innovation."
      },
      { 
        x: 27, 
        y: 58, 
        label: "Bronze Pyramid", 
        info: "Location: Bundoora campus, La Trobe University — near the Thomas Cherry / Jenny Graves building, by the bus stops\nFounding / Built: Sculpted in stages during 1980, 1982, 1983; unveiled 29 March 1997\nFounder / Artist / Benefactor: Artist: Bart Sanciolo; Gifted by the Italian community of Victoria.\nInteresting Notes: Three-sided bronze pyramid reflecting Hell, Purgatory, and Paradise. A gift to the people of Australia by the Italian community. Often used as a campus landmark to orient visitors."
      },
      { 
        x: 23, 
        y: 55, 
        label: "Bus Stops", 
        info: "Location: Bundoora campus, La Trobe University — Bus stops"
      },
      { 
        x: 81, 
        y: 34, 
        label: "John Scott Meeting House", 
        info: "Location: Bundoora campus, La Trobe University — behind Car Park 7\nFounding / Built: 1993\nFounder / Architect / Benefactor: Named for John Scott\nInteresting Notes: The John Scott Meeting House serves as a central space for meetings, conferences, and university events. It houses the Graduate Research School and dedicated meeting rooms. Upgrades have enhanced acoustics and audiovisual systems, improving the experience for formal gatherings. Located behind Car Park 7, it is an important venue for both academic and community functions."
      },
    ],
  },
];


// helper to turn a label into a URL path
const getPathFromLabel = (label: string) => {
  if (label.includes("Jenny Graves")) return "/JennyGravesBuilding";
  if (label.includes("John Scott")) return "/JohnScottMeetingHouse";
  if (label.includes("Graduate House")) return "/GraduateHouseWest";
  if (label.includes("Bronze Pyramid")) return "/BronzePyramid";
  if (label.includes("Bus Stops")) return "/BusStops";
  return "#"; // fallback if no match
};

const MapSwitcher: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedPOI, setSelectedPOI] = useState<PointOfInterest | null>(null);

  const swapMap = () => {
    setCurrentIndex((prev) => (prev + 1) % maps.length);
    setSelectedPOI(null);
  };

  const handlePOIClick = (poi: PointOfInterest) => {
    setSelectedPOI(poi);
  };

  return (
    <>
      <div style={{ flex: 1, position: "relative" }}>
        <Map
          mapImage={maps[currentIndex].image}
          pointsOfInterest={maps[currentIndex].points}
          width="100%"
          height="100%"
          onPOIClick={handlePOIClick}
        />
      </div>

      <Sidebar
        currentMapIndex={currentIndex}
        totalMaps={maps.length}
        swapMap={swapMap}
        selectedPOI={
          selectedPOI
            ? {
                ...selectedPOI,
                label: (
                  <Link href={getPathFromLabel(selectedPOI.label)}>
                    {selectedPOI.label}
                  </Link>
                ),
              }
            : null
        }
      />
    </>
  );
};

export default MapSwitcher;
