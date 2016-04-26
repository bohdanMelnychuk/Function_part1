//function Prime number
function isPrimeNumber(prime){
  prime % 2 >= 1 && prime % 3 >= 1 ? prime = 'It is PRIME number' : prime = 'This isn\'t prime number';
  return document.write(prime);
}
isPrimeNumber(24);
