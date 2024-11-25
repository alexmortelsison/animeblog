import Image from "next/image";
import React from "react";

const AnimeCard = ({ post }: { post: AnimeTypeCard }) => {
  return (
    <li className="mt-4 px-4">
      <div className="border lg:w-[250px] w-full hover:border-primary rounded-xl">
        <Image
          src={post.image}
          alt="card1"
          width={800}
          height={800}
          className="lg:w-[250px] lg:h-[300px] rounded-t-xl"
        />
        <p className="flex items-center justify-center mt-4">{post.title}</p>
        <p className="text-muted-foreground text-sm tracking-tighter flex items-center justify-center text-center">
          {post.released}
        </p>
        <p className="text-muted-foreground text-sm tracking-tighter flex items-center justify-center mt-4 text-center px-2 mb-4">
          {post.excerpt}
        </p>
      </div>
    </li>
  );
};

export default AnimeCard;
