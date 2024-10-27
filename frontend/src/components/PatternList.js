import React, { useEffect, useState } from "react";
import axios from "axios";

const PatternList = () => {
  const [patterns, setPatterns] = useState([]);

  useEffect(() => {
    fetch("http://localhost:1337/api/patterns?populate=*")
      .then((response) => response.json())
      .then((data) => setPatterns(data.data));
  }, []);
  return (
    <div className="pattern-list">
      {patterns.map((pattern) => (
        <div key={pattern.id} className="pattern-card">
          <h2>{pattern.name}</h2>
          <p>{pattern.description}</p>
          <p>Price: {pattern.price} Ft</p>
          {pattern.image && (
            <img
              src={`http://localhost:1337${pattern.image.url}`}
              alt={pattern.image.alternativeText || pattern.image.name}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default PatternList;
