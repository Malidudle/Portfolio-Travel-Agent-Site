import React from "react";
import ImageTrack from "./ImageTrack";

import Aurora from "@/public/tracks/track1/aurora.jpg";
import Desert from "@/public/tracks/track1/desertStructure.jpg";
import HillSnow from "@/public/tracks/track1/snowyMountain.jpg";
import Hills from "@/public/tracks/track1/hillyMountain.jpg";
import Tree from "@/public/tracks/track1/treeAtNight.jpg";
import Mountain from "@/public/tracks/track1/mountain.jpg"
import Resort from "@/public/tracks/track1/resort.jpg"
import Train from "@/public/tracks/track1/train.jpg"

import BeachHouses from "@/public/tracks/track2/beachHouses.jpg";
import MountainLake from "@/public/tracks/track2/mountainLake.jpg";
import Rocky from "@/public/tracks/track2/rocky.jpg";
import Sunset from "@/public/tracks/track2/sunset.jpg";
import Van from "@/public/tracks/track2/van.jpg";
import LakeBelgium from "@/public/tracks/track2/belgianLake.jpg"
import Bridge from "@/public/tracks/track2/Bridge.jpg"
import Venice from "@/public/tracks/track2/Venice.jpg"

import Flowers from "@/public/tracks/track3/flowerField.jpg";
import Hut from "@/public/tracks/track3/waterHut.jpg";
import Tent from "@/public/tracks/track3/tent.jpg";
import PeruHills from "@/public/tracks/track3/peruvianHill.jpg";
import Waterfall from "@/public/tracks/track3/waterfall.jpg";
import Milan from "@/public/tracks/track3/milan.jpg"
import BlueMountainLake from "@/public/tracks/track3/mountainLake.jpg"
import ThaiLakeBoat from "@/public/tracks/track3/ThaiLakeBoat.jpg"

const images1 = [
  {
    path: Aurora,
    width: 394,
    label: 'Experience The Aurora'
  },
  {
    path: Mountain,
    width: 424,
    label: 'Experience The Aurora'
  },
  {
    path: Desert,
    width: 248,
    label: 'Experience The Aurora'
  },
  {
    path: Resort,
    width: 394,
    label: 'Experience The Aurora'
  },
  {
    path: HillSnow,
    width: 257,
    label: 'Experience The Aurora'
  },
  {
    path: Hills,
    width: 330,
    label: 'Experience The Aurora'
  },
  {
    path: Train,
    width: 294,
    label: 'Experience The Aurora'
  },
  {
    path: Tree,
    width: 287,
    label: 'Experience The Aurora'
  },
];

const images2 = [
  {
    path: Flowers,
    width: 284,
    label: 'Experience The Aurora'
  },
  {
    path: PeruHills,
    width: 218,
    label: 'Experience The Aurora'
  },
  {
    path: Bridge,
    width: 377,
    label: 'Experience The Aurora'
  },
  {
    path: LakeBelgium,
    width: 294,
    label: 'Experience The Aurora'
  },
  {
    path: Hut,
    width: 390,
    label: 'Experience The Aurora'
  },
  {
    path: Tent,
    width: 227,
    label: 'Experience The Aurora'
  },
  {
    path: Waterfall,
    width: 317,
    label: 'Experience The Aurora'
  },
  {
    path: Venice,
    width: 387,
    label: 'Experience The Aurora'
  },
];

const images3 = [
  {
    path: ThaiLakeBoat,
    width: 304,
    label: 'Experience The Aurora'
  },
  {
    path: BeachHouses,
    width: 219,
    label: 'Experience The Aurora'
  },
  {
    path: Milan,
    width: 377,
    label: 'Experience The Aurora'
  },
  {
    path: MountainLake,
    width: 287,
    label: 'Experience The Aurora'
  },
  {
    path: Rocky,
    width: 319,
    label: 'Experience The Aurora'
  },
  {
    path: Van,
    width: 204,
    label: 'Experience The Aurora'
  },
  {
    path: BlueMountainLake,
    width: 427,
    label: 'Experience The Aurora'
  },
  {
    path: Sunset,
    width: 397,
    label: 'Experience The Aurora'
  },
];

const ImageTracks = () => {
  return (
    <div className="flex flex-col gap-3">
      <ImageTrack images={images1} line={1} />
      <ImageTrack images={images2} line={2} />
      <ImageTrack images={images3} line={3} />
    </div>
  );
};

export default ImageTracks;
