import React, { useState } from 'react';
import Post from './Post';

function PaginatedPosts({ posts }) {
  // state
  const [pageNumber, setPageNumber] = useState(1);

  // variables
  const pageLimit = 10;
  const numberOfPages = Math.ceil(posts.length / pageLimit);
  const startIndex = (pageNumber - 1) * pageLimit;
  const endIndex = pageNumber * pageLimit;
  const paginatedPosts = posts.slice(startIndex, endIndex);
  const numbers = [];

  for (let i = 1; i <= numberOfPages; i++) {
    numbers.push(i);
  }
  // functions
  function adjustPage(amount) {
    setPageNumber(currentPage => currentPage + amount);
  }

  // render
  return (
    <>
      <div className='paginated-posts'>
        {paginatedPosts.map(post => {
          return <Post key={post.id} post={post} />;
        })}
      </div>
      <div className='pagination-controls'>
        {pageNumber > 1 && (
          <div class='control' onClick={() => adjustPage(-1)}>
            <i className='fa fa-chevron-left' aria-hidden='true'></i>
          </div>
        )}
        {pageNumber > 3 && (
          <div className='control' onClick={() => setPageNumber(1)}>
            1
          </div>
        )}
        {pageNumber > 3 && <div className='control ellipsis'>...</div>}
        {numbers.map(number => {
          if (number === pageNumber - 1) {
            return (
              <div className='control' onClick={() => setPageNumber(number)}>
                {number}
              </div>
            );
          } else if (number === pageNumber) {
            return (
              <div
                className='control active'
                onClick={() => setPageNumber(number)}>
                {number}
              </div>
            );
          } else if (number === pageNumber + 1) {
            return (
              <div className='control' onClick={() => setPageNumber(number)}>
                {number}
              </div>
            );
          }
        })}
        {pageNumber < numberOfPages && (
          <div className='control' onClick={() => adjustPage(1)}>
            <i className='fa fa-chevron-right' aria-hidden='true'></i>
          </div>
        )}
      </div>
    </>
  );
}

export default PaginatedPosts;
