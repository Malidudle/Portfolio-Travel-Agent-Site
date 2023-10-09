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
    destinationID: "cqifofiu694hf1o",
  },
  {
    path: Mountain,
    width: 424,
    label: "Visit The Beatiful Mountains",
    destinationID: "t3mp050npv4ji6x",
  },
  {
    path: Desert,
    width: 248,
    label: "Jordan",
    destinationID: "so5ak07west157d",
  },
  {
    path: Resort,
    width: 394,
    label: "Thai Resorts",
    destinationID: "v7g6kue31w9qo89",
  },
  {
    path: HillSnow,
    width: 257,
    label: "Skiing Trips",
    destinationID: "il64cb0pfao2wfr",
  },
  {
    path: Hills,
    width: 330,
    label: "Hill Walks",
    destinationID: "yj24j95oh6yl6c8",
  },
  {
    path: Train,
    width: 294,
    label: "India",
    destinationID: "nn4mzjta8v9tqw1",
  },
  {
    path: Tree,
    width: 287,
    label: "Country Side Adventures",
    destinationID: "k57fmkaqc9u8s4d",
  },
];

const images2 = [
  {
    path: Flowers,
    width: 284,
    label: "Netherlands",
    destinationID: "lcesawkry6mkt3n",
  },
  {
    path: PeruHills,
    width: 218,
    label: "Peru",
    destinationID: "i1qtvmzjgd5qc8b",
  },
  {
    path: Bridge,
    width: 377,
    label: "Paris",
    destinationID: "ohagn91ziafh41f",
  },
  {
    path: LakeBelgium,
    width: 294,
    label: "Belgium",
    destinationID: "tcg6y7102wj4jmn",
  },
  {
    path: Hut,
    width: 390,
    label: "Stay In A Lakeside Cabin",
    destinationID: "v7g6kue31w9qo89",
  },
  {
    path: Tent,
    width: 227,
    label: "Camping",
    destinationID: "qky5dklfooj32uc",
  },
  {
    path: Waterfall,
    width: 317,
    label: "The Isle Of Skye",
    destinationID: "42qdk3pa9kakhbx",
  },
  {
    path: Venice,
    width: 387,
    label: "Venice",
    destinationID: "nxnfa7c533clqp6",
  },
];

const images3 = [
  {
    path: ThaiLakeBoat,
    width: 304,
    label: "Thailand Boat Trips",
    destinationID: "ysy266ey10259j5",
  },
  {
    path: BeachHouses,
    width: 219,
    label: "Mauritius",
    destinationID: "ck6s900dr0x6xqd",
  },
  {
    path: Milan,
    width: 377,
    label: "Milan",
    destinationID: "oraj3lm4o3y0itl",
  },
  {
    path: MountainLake,
    width: 287,
    label: "Explore Beautiful Lake Boat Trips",
    destinationID: "8oxyy0flyuyy2w8",
  },
  {
    path: Rocky,
    width: 319,
    label: "Explore The Danger",
    destinationID: "ui9knujpwzs4mfd",
  },
  {
    path: Van,
    width: 204,
    label: "Van Camping",
    destinationID: "ed3jjohjpu8ll6a",
  },
  {
    path: BlueMountainLake,
    width: 427,
    label: "Stay In The Mountains",
    destinationID: "4w70mwuoefd8lcv",
  },
  {
    path: Sunset,
    width: 397,
    label: "Greece",
    destinationID: "ys4f7mfvj1ayt2c",
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
