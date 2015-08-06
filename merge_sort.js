function merge_sort(arr) {
  if (arr.length === 1) {return arr;}
  var mid = Math.floor(arr.length / 2);
  var left = merge_sort(arr.slice(0, mid));
  var right = merge_sort(arr.slice(mid))
  return merge(left, right);
}

function merge(left, right) {
  if (left.length === 0) {return right;}
  if (right.length === 0) {return left;}
  return left[0] <= right[0] ? [left.shift()].concat(merge(left, right)): [right.shift()].concat(merge(left, right));
}
