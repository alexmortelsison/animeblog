import React from "react";
import Form from "next/form";
import SearchFormReset from "./SearchFormReset";
import { Search } from "lucide-react";
import { Button } from "./ui/button";

const SearchForm = ({ query }: { query?: string }) => {
  return (
    <Form action={"/news"} className="search-form">
      <input
        name="query"
        placeholder="Search anime..."
        defaultValue={query}
        className="text-muted-foreground text-sm bg-transparent"
      />
      {query && <SearchFormReset />}
      <Button type="submit">
        <Search />
      </Button>
    </Form>
  );
};

export default SearchForm;
