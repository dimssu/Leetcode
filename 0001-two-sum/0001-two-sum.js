/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
let FinalIndex=[]
    let x = nums.length;
    for(let i = 0; i<(x-1); i++){
        for(let j=(i+1); j<x; j++){
            if((nums[i]+nums[j]) == target){
                FinalIndex.push(i,j);
            }
        }
    }
    return(FinalIndex);
};