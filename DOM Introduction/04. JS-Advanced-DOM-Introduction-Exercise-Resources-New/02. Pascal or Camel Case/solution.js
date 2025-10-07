function solve() {
  let input = document.getElementById("text").value;
  const currentCase = document.getElementById("naming-convention").value;
  const resultRef = document.getElementById('result');

  let words = input.toLowerCase().split(' ');
  let result = '';

  switch (currentCase) {
    case "Pascal Case":
      result = words
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join('');
      break;

    case "Camel Case":
      result = words
        .map((word, index) => {
          if (index === 0) {
            return word;
          }
          return word.charAt(0).toUpperCase() + word.slice(1);
        })
        .join('');
      break;

    default:
      result = 'Error!';
  }

  resultRef.textContent = result;
}