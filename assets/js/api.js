/**
 * @license MIT
 * @copyright 2023 codewithsadee
 * @author codewithsadee <mohammadsadee24@gmail.com>
 */

"use strict";

window.ACCESS_POINT = "https://api.edamam.com/api/recipes/v2";
const /** {String} */ APP_ID = "81ff889b";
const /** {String} */ APP_KEY = "7cae554f362ef8e7c1e24e4c0b0c64b4";
const /** {String} */ TYPE = "public";

/**
 * @param {Array} queries Query array
 * @param {Function} successCallback Success callback function
 */

export const fetchData = async function (queries, successCallback) {
    const /** {String} */ query = queries
      ? queries
          .join("&")
          .replace(/,/g, "=")
          .replace(/ /g, "%20")
          .replace(/\+/g, "%2B")
      : "";
  
    const /** {String} */ url = `${ACCESS_POINT}?app_id=${APP_ID}&app_key=${APP_KEY}&type=${TYPE}${
      query ? `&${query}` : ""
    }`;
  
    const response = await fetch(url, {
        headers: {
          Authorization: `app_id ${APP_ID}`,
        },
      });
    
      if (response.ok) {
        const data = await response.json();
        successCallback(data);
      } else {
        // Handle errors here
        console.error("Error:", response.statusText);
      }
  };
