const typedArray = new Uint16Array([1, 2, 3]);

typedArray.BYTES_PER_ELEMENT; // 2 - pour 2 octets ou bytes par élément
typedArray.length; // 3 - nombre d’éléments
typedArray.byteLength; // 6 - pour 6 octets ou bytes
console.log(typedArray);
