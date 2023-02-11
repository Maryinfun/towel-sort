// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (Array.length === 0) {
        return []
      }
      if (Array.isArray(matrix) === false) {
        return []
      }
      index = 0;
      matrix.forEach((element) => {
        if (index % 2 != 0 && index < matrix.length) {
          element = element.reverse();
          index++;
        } else {
          index++;
        }
      });
      return matrix.flat();
};
