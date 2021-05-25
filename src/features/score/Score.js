import React from 'react';
// Add import statement below
import { useSelector } from 'react-redux';
import { selectMatchedIDs } from '../board/boardSlice';


export const Score = () => {
  // Add selected data variable below
  const cardMatched = useSelector(selectMatchedIDs);

  return (
    // implement selected data inside <div>
    <div className="score-container">Matched: {cardMatched.length}</div>
  );
};