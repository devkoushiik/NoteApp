import { useState } from "react";
import { Note } from "../store/noteStore";
const usePaginate = (data: Note[]) => {
  const itemsPerPage = 4;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handleClick = (page: number) => {
    setCurrentPage(page);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  return { itemsPerPage, handleClick, currentPage, currentItems, totalPages };
};
export default usePaginate;
