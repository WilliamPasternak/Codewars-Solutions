/**
 * Formats a list of addresses based on a given ZIP code.
 *
 * @param {string} r - The list of addresses as a comma-separated string.
 * @param {string} zipcode - The ZIP code to filter addresses.
 * @returns {string} - The formatted result string containing streets and house numbers.
 */

function travel(r, zipcode) {
  // Split the input string into an array of addresses
  const addressList = r.split(",");

  // Arrays to store streets and house numbers
  const streets = [];
  const numbers = [];

  // Iterate through each address in the list
  addressList.forEach(address => {
    // Extract the ZIP code from the end of the address
    let zip = address.substring(address.length - 8, address.length);

    // Check if the ZIP code matches the provided zipcode
    if (zip === zipcode) {
      // Extract house number and street information from the address
      let number = address.substring(0, address.indexOf(" ") + 1);
      let street = address.substring(address.indexOf(" "), address.length - 8);

      // Push street and number to respective arrays
      streets.push(street.trim());
      numbers.push(number.trim());
    }
  });

  // Construct the final result string
  return `${zipcode}:${streets.join(",")}/${numbers.join(",")}`;
}
