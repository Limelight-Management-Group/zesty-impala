import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import MergeSort from '../src/mergeSort'

chai.use(chaiChange)

describe('insertion sort', function(){
  it.only('should sort correctly', () => {
    var nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1]
    var ans = mergeSort(nums);
    expect(ans).toEqual([1,2,3,4,5,6,7,8,9,10])
  });
})



