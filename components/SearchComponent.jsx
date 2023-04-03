import React, { useEffect, useState } from "react";

const SearchComponent = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  useEffect(() => {
    if (query) {
      fetch(`https://bloggy-app-weld.vercel.app/api/search/${query}`)
        .then((res) => res.json())
        .then((res) => {
          setResults(res);
          console.log(res);
        });
    } else setResults([]);
  }, [query]);

  return (
    <div className="relative mt-10">
      <div class="flex justify-center">
        <div class="mb-3 lg:w-[700px]">
          <div class="relative mb-4 flex w-full flex-wrap items-stretch">
            <input
              value={query}
              onChange={handleInputChange}
              type="search"
              class="relative m-0 -mr-px block w-[1%] min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-1.5 text-base font-normal text-neutral-700 outline-none transition duration-300 ease-in-out focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:text-neutral-200 dark:placeholder:text-neutral-200"
              placeholder="Search"
              aria-label="Search"
              aria-describedby="button-addon1"
            />
            <button
              class="relative z-[2] flex items-center rounded-r bg-primary px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg"
              type="button"
              id="button-addon1"
              data-te-ripple-init
              data-te-ripple-color="light"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                class="h-5 w-5"
              >
                <path
                  fill-rule="evenodd"
                  d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-[-30px]">
        {results.length > 0 && query.length > 0 && (
          <div className="lg:w-[700px] absolute z-10 top-full mt-2 w-full rounded-md shadow-xl  bg-white divide-y divide-gray-200 ">
            {results.map((result) => (
              <div key={result._id} className="p-4">
                <h2 className="text-lg font-medium">{result.postTitle}</h2>
                <div
                  className="quill-content"
                  dangerouslySetInnerHTML={{
                    __html: result.postDes.slice(0, 100),
                  }}
                ></div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchComponent;
