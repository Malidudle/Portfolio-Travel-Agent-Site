import React from "react";
import ImageTrack from "./ImageTrack";

import Aurora from "@/public/tracks/track1/aurora.jpg";
import Desert from "@/public/tracks/track1/desertStructure.jpg";
import HillSnow from "@/public/tracks/track1/snowyMountain.jpg";
import Hills from "@/public/tracks/track1/hillyMountain.jpg";
import Tree from "@/public/tracks/track1/treeAtNight.jpg";

import BeachHouses from "@/public/tracks/track2/beachHouses.jpg";
import MountainLake from "@/public/tracks/track2/mountainLake.jpg";
import Rocky from "@/public/tracks/track2/rocky.jpg";
import Sunset from "@/public/tracks/track2/sunset.jpg";
import Van from "@/public/tracks/track2/van.jpg";

import Flowers from "@/public/tracks/track3/flowerField.jpg";
import Hut from "@/public/tracks/track3/waterHut.jpg";
import Tent from "@/public/tracks/track3/tent.jpg";
import PeruHills from "@/public/tracks/track3/peruvianHill.jpg";
import Waterfall from "@/public/tracks/track3/waterfall.jpg";

const images1 = [
  {
    path: Aurora,
    width: 394,
  },
  {
    path: Desert,
    width: 248,
  },
  {
    path: HillSnow,
    width: 257,
  },
  {
    path: Hills,
    width: 330,
  },
  {
    path: Tree,
    width: 287,
  },
];

const images2 = [
  {
    path: Flowers,
    width: 284,
  },
  {
    path: PeruHills,
    width: 218,
  },
  {
    path: Tent,
    width: 397,
  },
  {
    path: Hut,
    width: 390,
  },
  {
    path: Waterfall,
    width: 217,
  },
];

const images3 = [
  {
    path: BeachHouses,
    width: 219,
  },
  {
    path: MountainLake,
    width: 287,
  },
  {
    path: Rocky,
    width: 219,
  },
  {
    path: Van,
    width: 504,
  },
  {
    path: Sunset,
    width: 397,
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
