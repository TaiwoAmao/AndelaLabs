(function() {
  'use strict';

  describe('Min-Max Numbers in a List: ', function () {

    describe('Return the min and max number in the list in a new list follows `[min, max]`', function () {

      it('should return [1,4] for [1, 2, 3 , 4]', function () {
        expect(findMinMax([1, 2, 3, 4])).toEqual([1, 4]);
      });

      it('should return [4, 6] for [6, 4]', function () {
        expect(findMinMax([6, 4])).toEqual([4, 6]);
      });

      it('should return [2, 78] for [4, 66, 6, 44, 7, 78, 8, 68, 2]', function () {
        expect(findMinMax([4, 66, 6, 44, 7, 78, 8, 68, 2])).toEqual([2, 78]);
      });

      it('should return [4,9] for [7, 5, 9, 4]', function () {
        expect(findMinMax([7, 5, 9, 4])).toEqual([4, 9]);
      });

      it('should return [2, 7] for [7, 2]', function () {
        expect(findMinMax([7, 2])).toEqual([2, 7]);
      });

    });

    describe('Return the number in the list in a new list follows `[min]` when the number is the min and max number in that list', function () {

      it('should return [4] for [4, 4, 4, 4]', function () {
        expect(findMinMax([4, 4, 4, 4])).toEqual([4]);
      });

      it('should return [7] for [7, 7, 7, 7]', function () {
        expect(findMinMax([7, 7, 7, 7])).toEqual([7]);
      });

      it('should return [12] for [12, 12, 12, 12]', function () {
        expect(findMinMax([12, 12, 12, 12])).toEqual([12]);
      });      

        it('should return [6] for [6, 6, 6, 6]', function () {
        expect(findMinMax([6, 6, 6, 6])).toEqual([6]);
      }); 

          it('should return [1] for [1, 1, 1, 1]', function () {
        expect(findMinMax([1, 1, 1, 1])).toEqual([1]);
      }); 
    });

  });

})();