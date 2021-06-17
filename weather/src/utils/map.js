/**
 * @template T, V
 * @param {(element: T) => V} callback
 * @param {T[]} collection
 * @returns {V[]}
 */
const map = (callback, collection) => {
   return collection.reduce((acc, element, index) => {
      acc[index] = callback(element);
      return acc;
   }, new Array(collection.length))
};