import * as React from "react";
import { ThemeProvider } from "@fluentui/react";
import "./styles.css";

export default function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <h1 className="header">Insertion Sort Algorithm</h1>
        <div className="content">
          <h4> Explanation:</h4>
          <p>1. Iterate from the first to last index of the array.</p>
          <p>2. Compare the new key to the previous key.</p>
          <code> If: The new key is smaller then the previous key</code>
          <p>Compare it to the previous key's predecessor.</p>
          <code> Else If: The new key is larger then the previous key</code>
          <p>Move it up one position.</p>
          <h4>Note: Incredibly fast when sorting a small array.</h4>
          <img
            className="image"
            alt="Diagram"
            src="https://media.geeksforgeeks.org/wp-content/uploads/insertionsort.png"
          />
          <h4>Time Complexity: O(n) - O(n^2)</h4>
          <h4>Auxiliary Space: O(1)</h4>
        </div>
      </div>
    </ThemeProvider>
  );
}
