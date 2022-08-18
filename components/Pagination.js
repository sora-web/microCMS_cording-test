//components/Pagination.js
import Router from "next/router";
import Link from "next/link";

export const Pagination = ({ totalCount }) => {
  const PER_PAGE = 5;

  const range = (start, end) =>
    [...Array(end - start + 1)].map((_, i) => start + i);

  return (
    <ul className="c-pagenation-list">
      {range(1, Math.ceil(totalCount / PER_PAGE)).map((number, index) => (
        <li key={index} className="c-pagenation-item">
          <Link href={`/blog/page/${number}`}>
            <a>{number}</a>
          </Link>
        </li>
      ))}
    </ul>
  );
};
