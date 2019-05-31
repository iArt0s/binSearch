let nums = [1,2,3,4,5,6,7,8,9];

var search = function(nums, target) {
    let start = 0;
    let end = nums.length -1;
    let middle = Math.floor((start+end)/2);

    while(nums[middle] !== target && start <= end) {
        if(nums[middle] < target) start = middle +1;
        else end = middle -1;
        middle = Math.floor((start+end)/2);
    }
    return nums[middle] === target ? middle : -1;
    
};
