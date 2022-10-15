//
// This is only a SKELETON file for the 'Pangram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isPangram = (txt) => {
  txt = txt.toLowerCase();
  var result;
  for (let i = 97; i <= 122; i++) {
    result = txt.includes(String.fromCharCode(i));
    if (!result) break;
  }
  return result;
};
