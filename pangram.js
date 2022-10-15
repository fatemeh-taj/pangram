//
// This is only a SKELETON file for the 'Pangram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isPangram = (txt) => {
  return new Set(txt.toUpperCase().match(/[A-Z]/g)).size === 26;
};
