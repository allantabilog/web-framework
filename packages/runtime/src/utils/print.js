// print a JSON object

export function jp(obj, indent) {
  return indent ? JSON.stringify(obj, null, indent) : JSON.stringify(obj);
}

export function jplog(obj, indent) {
  if (indent) {
    console.log(jp(obj, indent));
  } else {
    console.log(jp(obj));
  }
}
