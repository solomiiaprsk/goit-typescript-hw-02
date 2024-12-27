import React, { FormEvent } from "react";
import toast, { Toaster } from "react-hot-toast";
import css from "../SearchBar/SearchBar.module.css";

interface SearchBarProps {
  onSearch: (topic: string) => void;
}

function SearchBar({ onSearch }: SearchBarProps): JSX.Element {
  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const form = evt.target as HTMLFormElement;
    const topicInput = form.elements.namedItem("topic") as HTMLInputElement;

    const topic = topicInput.value;

    if (topic.trim() === "") {
      toast.error("Search field cannot be empty");
      return;
    }

    onSearch(topic);
    form.reset();
  };

  return (
    <header>
      <form onSubmit={handleSubmit} className={css.form}>
        <input
          type="text"
          name="topic"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          className={css.input}
        />
        <button type="submit" className={css.btn}>
          Search
        </button>
      </form>
      <Toaster />
    </header>
  );
}
export default SearchBar;
