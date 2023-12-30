// print a JSON object

export function jp(obj, indent, description) {
  let message = "";
  if (description == undefined) {
    description = "log";
  }
  if (indent == undefined) {
    indent = 0;
  }
  message += description + ": ";
  message += indent
    ? `${JSON.stringify(obj, null, indent)}`
    : `${JSON.stringify(obj)}`;

  return message;
}

export function jplog(obj, indent, description) {
  console.log(jp(obj, indent, description));
}
