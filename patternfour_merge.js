function merge(intervals) {
  // edge case: empty input
  if (!intervals.length) return [];

  // 1️⃣ Sort intervals by start time
  // This is IMPORTANT so overlapping intervals come together
  intervals.sort((a, b) => a[0] - b[0]);

  // 2️⃣ Start result with first interval
  const res = [intervals[0]];

  // 3️⃣ Iterate through remaining intervals
  for (let i = 1; i < intervals.length; i++) {
    let curr = intervals[i]; // current interval
    let last = res[res.length - 1]; // last interval in result

    // 4️⃣ Check overlap
    // If current start <= last end → they overlap
    if (curr[0] <= last[1]) {
      // 5️⃣ Merge by updating end
      // Take the max end to cover both intervals
      last[1] = Math.max(last[1], curr[1]);
    } else {
      // 6️⃣ No overlap → just add interval
      res.push(curr);
    }
  }

  // 7️⃣ Return merged intervals
  return res;
}

function intervels(num) {
  // if they ask to insert just pust it here
  if (!num.length) return [];
  num.sort((a, b) => a[0] - b[0]);
  const res = [num[0]];
  console.log(res);
  for (let i = 1; i < num.length; i++) {
    let curr = num[i];
    let last = res[res.length - 1];
    if (curr[0] <= last[1]) {
      last[1] = Math.max(last[1], curr[1]);
    } else {
      res.push(curr);
    }
  }
  return res;
}

console.log(
  intervels([
    [1, 4],
    [2, 6],
    [8, 10],
    [15, 18],
  ]),
);
