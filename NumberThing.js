var nums = [] 
var numValue
function saveNumValue(){
    numValue = document.getElementById("numInput").value;
    console.log(numValue);
}
function numThing(dummyNumPara){
    nums = [];
    nums.push(dummyNumPara);
    while (nums[nums.length -1] > 1){
        nums.push((nums[nums.length - 1] - 1))
        console.log(nums[nums.length - 1])
    }
    document.getElementById("display").innerHTML = nums;
}