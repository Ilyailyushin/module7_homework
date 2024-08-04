const arr = [];
function sortAsc(arr) {
    return arr.sort((a, b) => a - b);
    };
function uniqueSorted(arr) {
    return sortAsc(unique(arr));
     };
function unique(arr) {
    return arr.filter((item, index) => arr.indexOf(item) === index);
    };
    const uniqueSortedArr = uniqueSorted(arr);
    console.log(uniqueSortedArr);