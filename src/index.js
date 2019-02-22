/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
   let count = 0;

   for (let index = 0; index < preferences.length; index++) {
      const firstLover = preferences[index - 1];
      const secondLover = preferences[firstLover - 1];
      const thirdLover = preferences[secondLover - 1];

      const isTriangle = index === thirdLover;
      const selfLove = index === secondLover;

      if (isTriangle && !selfLove) {
         count++;
      }
   }

   return Math.round(count / 3);
};
