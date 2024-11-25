import AnimeCard from "@/components/AnimeCard";
import { PaginationPage } from "@/components/PaginationPage";
import SearchForm from "@/components/SearchForm";
import React from "react";

const posts = [
  {
    _id: 1,
    _createdAt: "Today",
    title: "My Hero Academia",
    season: 1,
    released: 2016,
    image: "/MHA.jpg",
    excerpt:
      "Quirkless Izuku Midoriya faces U.A.'s toughest test yet, unsure if he’s cut out to be a hero. With All Might’s power inside him, he’s determined to prove he belongs—no matter the cost.",
    description:
      "The sun sets over U.A. High School, casting long shadows across the training grounds. Izuku Midoriya, quirkless and determined, stands among his classmates, heart racing as he faces his greatest challenge yet—surviving the infamous 'Quirk Apprehension Test.' All he’s ever dreamed of is becoming a hero, but with no powers to speak of, he’s starting to feel the weight of his limitations. 'Give it everything you've got, Deku!' Uraraka calls out, her bright eyes full of encouragement. But it's not just the test that weighs on him. It's the memory of the moment when All Might, the greatest hero, passed on his power to him. One For All—a quirk that will push him to his limits. As the test begins, Izuku's heart pounds in his chest. He knows that this is his chance to prove to everyone, and to himself, that he has what it takes to be a hero. But can he survive the brutal test? And what kind of hero can he truly become with a power as dangerous as his own?",
  },
];

const NewsPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ query: string }>;
}) => {
  const query = (await searchParams).query;
  return (
    <div className="min-h-screen md:max-w-7xl mx-auto">
      <div className="flex">
        <SearchForm query={query} />
      </div>
      <div></div>
      <div className="bg-primary mt-12 rounded-md mx-4">
        <PaginationPage />
      </div>
      <div className="mt-12 px-4 text-primary font-bold tracking-tighter capitalize">
        {query ? `See results for ${query}` : "All anime list"}
      </div>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {posts.length > 0 ? (
          posts.map((post: AnimeTypeCard) => (
            <AnimeCard key={post?._id} post={post} />
          ))
        ) : (
          <p>No results.</p>
        )}
      </ul>
    </div>
  );
};

export default NewsPage;
