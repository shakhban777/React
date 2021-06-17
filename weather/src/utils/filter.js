/**
 * @template T
 * @param {(element: T) => boolean} predicate
 * @param {T[]} collection
 * @returns {T[]}
 */
const filter = (predicate, collection) => {
   return collection.reduce((acc, element) => {
      if (predicate(element)) {
         return [...acc, element];
      }
      return acc;
   }, []);
};