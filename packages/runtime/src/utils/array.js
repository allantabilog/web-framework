export function withoutNulls(arr) {
  return arr.filter((item) => item != null); // Note we use != instead of !== to remove both null and undefined values
}
