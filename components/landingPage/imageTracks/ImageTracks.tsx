import React from "react";
import ImageTrack from "./ImageTrack";

import Aurora from "@/public/tracks/track1/aurora.jpg";
import Desert from "@/public/tracks/track1/desertStructure.jpg";
import HillSnow from "@/public/tracks/track1/snowyMountain.jpg";
import Hills from "@/public/tracks/track1/hillyMountain.jpg";
import Tree from "@/public/tracks/track1/treeAtNight.jpg";
import Mountain from "@/public/tracks/track1/mountain.jpg";
import Resort from "@/public/tracks/track1/resort.jpg";
import Train from "@/public/tracks/track1/train.jpg";

import BeachHouses from "@/public/tracks/track2/beachHouses.jpg";
import MountainLake from "@/public/tracks/track2/mountainLake.jpg";
import Rocky from "@/public/tracks/track2/rocky.jpg";
import Sunset from "@/public/tracks/track2/sunset.jpg";
import Van from "@/public/tracks/track2/van.jpg";
import LakeBelgium from "@/public/tracks/track2/belgianLake.jpg";
import Bridge from "@/public/tracks/track2/Bridge.jpg";
import Venice from "@/public/tracks/track2/Venice.jpg";

import Flowers from "@/public/tracks/track3/flowerField.jpg";
import Hut from "@/public/tracks/track3/waterHut.jpg";
import Tent from "@/public/tracks/track3/tent.jpg";
import PeruHills from "@/public/tracks/track3/peruvianHill.jpg";
import Waterfall from "@/public/tracks/track3/waterfall.jpg";
import Milan from "@/public/tracks/track3/milan.jpg";
import BlueMountainLake from "@/public/tracks/track3/mountainLake.jpg";
import ThaiLakeBoat from "@/public/tracks/track3/ThaiLakeBoat.jpg";

const images1 = [
  {
    path: Aurora,
    width: 394,
    label: "See the Aurora",
    destinationID: 4,
  },
  {
    path: Mountain,
    width: 424,
    label: "Visit The Beatiful Mountains",
    destinationID: 11,
  },
  {
    path: Desert,
    width: 248,
    label: "Jordan",
    destinationID: 7,
  },
  {
    path: Resort,
    width: 394,
    label: "Thai Resorts",
    destinationID: 16,
  },
  {
    path: HillSnow,
    width: 257,
    label: "Skiing Trips",
    destinationID: 18,
  },
  {
    path: Hills,
    width: 330,
    label: "Hill Walks",
    destinationID: 9,
  },
  {
    path: Train,
    width: 294,
    label: "India",
    destinationID: 21,
  },
  {
    path: Tree,
    width: 287,
    label: "Country Side Adventures",
    destinationID: 22,
  },
];

const images2 = [
  {
    path: Flowers,
    width: 284,
    label: "Netherlands",
    destinationID: 8,
  },
  {
    path: PeruHills,
    width: 218,
    label: "Peru",
    destinationID: 15,
  },
  {
    path: Bridge,
    width: 377,
    label: "Paris",
    destinationID: 1,
  },
  {
    path: LakeBelgium,
    width: 294,
    label: "Belgium",
    destinationID: 6,
  },
  {
    path: Hut,
    width: 390,
    label: "Stay In A Lakeside Cabin",
    destinationID: 24,
  },
  {
    path: Tent,
    width: 227,
    label: "Camping",
    destinationID: 20,
  },
  {
    path: Waterfall,
    width: 317,
    label: "The Isle Of Skye",
    destinationID: 25,
  },
  {
    path: Venice,
    width: 387,
    label: "Venice",
    destinationID: 3,
  },
];

const images3 = [
  {
    path: ThaiLakeBoat,
    width: 304,
    label: "Thailand Boat Trips",
    destinationID: 2,
  },
  {
    path: BeachHouses,
    width: 219,
    label: "Mauritius",
    destinationID: 5,
  },
  {
    path: Milan,
    width: 377,
    label: "Milan",
    destinationID: 10,
  },
  {
    path: MountainLake,
    width: 287,
    label: "Explore Beautiful Lake Boat Trips",
    destinationID: 13,
  },
  {
    path: Rocky,
    width: 319,
    label: "Experience Danger",
    destinationID: 17,
  },
  {
    path: Van,
    width: 204,
    label: "Van Camping",
    destinationID: 23,
  },
  {
    path: BlueMountainLake,
    width: 427,
    label: "Outdoor Swimming",
    destinationID: 12,
  },
  {
    path: Sunset,
    width: 397,
    label: "Greece",
    destinationID: 19,
  },
];

const ImageTracks = () => {
  return (
    <div className="flex flex-col gap-7">
      <ImageTrack images={images1} line={1} lazy={false} />
      <ImageTrack images={images2} line={2} lazy={false} />
      <ImageTrack images={images3} line={3} lazy={true} />
    </div>
  );
};

export default ImageTracks;
