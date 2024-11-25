import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const HomePage = () => {
  return (
    <div className="relative">
      <div>
        <Image
          src={"/MHA.jpg"}
          alt="cover"
          width={1000}
          height={100}
          className="md:w-full md:min-h-screen lg:h-[600px]"
        />
      </div>

      <div className="md:absolute md:inset-0 bg-black opacity-80"></div>

      <div
        className="md:absolute md:inset-0 flex items-center justify-center md:justify-start 
          text-white text-center md:text-left px-4 py-16 md:px-28 md:py-48 flex-col"
      >
        <p className="text-7xl md:text-9xl font-extrabold tracking-tighter text-black md:text-white dark:text-white">
          anime.<span className="text-primary">List</span>
        </p>
        <p className="text-sm md:text-base max-w-lg md:max-w-2xl mt-2 md:mt-6 text-center md:text-center text-muted-foreground">
          Explore an extensive collection of anime series and films, ranging
          from iconic classics to the newest releases. Whether you're a
          long-time fan or just starting your anime journey, you'll find
          recommendations, ratings, and reviews to help guide your next watch.
          Start exploring now and immerse yourself in captivating stories and
          thrilling adventures!
        </p>
        <Button asChild className="mt-6">
          <Link href={"/news"} className="text-white hover:font-semibold">
            See List
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default HomePage;
