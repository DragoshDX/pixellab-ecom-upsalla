export const Pagination = () => {
  const pageCount = 8;
  const setPage = () => {};
  const page = 1;

  return (
    <ul className="flex gap-2">
      {Array(pageCount)
        .fill(' ')
        .map((_, index) => {
          const pageIndex = index + 1;

          return (
            <li key={index}>
              <button
                type="button"
                title={`Page ${pageIndex}`}
                className={`border border-zinc-200 p-2 hover:bg-black hover:text-white transition-colors ${
                  pageIndex === page ? 'bg-black text-white' : ''
                }`}
                onClick={() => {
                  setPage(pageIndex);
                }}
              >
                {pageIndex}
              </button>
            </li>
          );
        })}
    </ul>
  );
};
