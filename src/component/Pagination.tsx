import { Note } from "../store/noteStore";

interface Props {
  items: Note[];
  itemsPerPage: number;
  handleClick: (page: number) => void;
  currentPage: number;
  currentItems: Note[];
  totalPages: number;
}

const Pagination = ({ handleClick, currentPage, totalPages }: Props) => {
  const itemGen = () => {
    const arr = [];
    for (let i = 0; i < totalPages; i++) {
      arr.push(i);
    }
    return arr;
  };

  return (
    <div className="join grid-cols-2">
      <button
        onClick={() => handleClick(currentPage - 1)}
        disabled={currentPage === 1}
        className="join-item btn btn-outline"
      >
        Previous page
      </button>

      {Array.from(itemGen(), (_, index) => (
        <input
          key={index}
          className="join-item btn btn-square"
          type="radio"
          name="options"
          aria-label={(index + 1).toString()}
          checked={currentPage === index + 1}
          onChange={() => handleClick(index + 1)}
        />
      ))}
      <button
        onClick={() => handleClick(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="join-item btn btn-outline"
      >
        Next
      </button>
    </div>
  );
};
export default Pagination;
