import { useState } from "react";
import Navbar from "./Navbar";

const ProblemSet = () => {

    const problems1 = [
        {
          title: 'Two Sum',
          difficulty: 'Easy',
          acceptanceRate: '48.8%',
        },
        {
          title: 'Longest Substring Without Repeating Characters',
          difficulty: 'Medium',
          acceptanceRate: '30.0%',
        },
        {
          title: 'Median of Two Sorted Arrays',
          difficulty: 'Hard',
          acceptanceRate: '29.9%',
        },
        {
          title: 'Reverse Integer',
          difficulty: 'Easy',
          acceptanceRate: '26.8%',
        },
        {
          title: 'Valid Parentheses',
          difficulty: 'Easy',
          acceptanceRate: '43.2%',
        },
        {
          title: 'Merge Two Sorted Lists',
          difficulty: 'Easy',
          acceptanceRate: '53.9%',
        },
        {
          title: 'Container With Most Water',
          difficulty: 'Medium',
          acceptanceRate: '49.1%',
        },
        {
          title: '3Sum',
          difficulty: 'Medium',
          acceptanceRate: '26.6%',
        },
        {
          title: 'Longest Palindromic Substring',
          difficulty: 'Medium',
          acceptanceRate: '28.9%',
        },
        {
          title: 'Regular Expression Matching',
          difficulty: 'Hard',
          acceptanceRate: '28.4%',
        },
      ];

    const problems2 = [
        {
          title: 'Find First and Last Position of Element in Sorted Array',
          difficulty: 'Medium',
          acceptanceRate: '39.1%',
        },
        {
          title: 'Jump Game',
          difficulty: 'Medium',
          acceptanceRate: '38.5%',
        },
        {
          title: 'Word Search',
          difficulty: 'Medium',
          acceptanceRate: '33.4%',
        },
        {
          title: 'Symmetric Tree',
          difficulty: 'Easy',
          acceptanceRate: '49.6%',
        },
        {
          title: 'Merge k Sorted Lists',
          difficulty: 'Hard',
          acceptanceRate: '38.9%',
        },
        {
          title: 'Product of Array Except Self',
          difficulty: 'Medium',
          acceptanceRate: '62.5%',
        },
        {
          title: 'Longest Increasing Subsequence',
          difficulty: 'Medium',
          acceptanceRate: '44.6%',
        },
        {
          title: 'House Robber',
          difficulty: 'Easy',
          acceptanceRate: '45.6%',
        },
        {
          title: 'Course Schedule',
          difficulty: 'Medium',
          acceptanceRate: '47.4%',
        },
        {
          title: 'Trapping Rain Water',
          difficulty: 'Hard',
          acceptanceRate: '49.2%',
        },
      ];

    const [problems, setProblems] = useState(problems1);
      

    const renderProblems = (problems) => {
        return (
            problems.map((problem, index) => (
                <tr key={index}>
                    <td><a href={"https://leetcode.com/problems/" + (problem.title.split(" ").join("-").toLowerCase()) + "/"}>{ (index + 1) + '. ' + problem.title }</a></td>
                    <td>{ problem.difficulty }</td>
                    <td>{ problem.acceptanceRate }</td>
                </tr>
            ))
        )
    }
      

    return ( 
      <>
        <Navbar />
        <div className="table-wrapper">
          
            <table>
              <tr>
                  <th>Title</th>
                  <th>Difficulty</th>
                  <th>Acceptance</th>
              </tr>
              {renderProblems(problems)}
            </table>
            <div className="button-wrapper">
              <button onClick={() => setProblems(problems1)}>previous</button>
              <button onClick={() => setProblems(problems2)}>next</button> 
            </div>
        </div>
      </>  
     );
}
 
export default ProblemSet;