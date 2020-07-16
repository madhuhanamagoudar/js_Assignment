//String methods
sentence1=`Humpty dumpty sat on wall`;
sentence2=`Humpty dumpty Had great fall`
console.log(sentence1);
console.log(sentence2);
console.log(sentence1.charCodeAt(4));//returns A Unicode value
console.log(sentence1.concat(' '+sentence2))//concatinates two strings
console.log(sentence1.search("on"))//t searches a specified regular expression in a given string and returns its position if a match occurs.
console.log(sentence2.match("great"))
console.log(sentence1.replace(" ",""))//it replaces the specified value
console.log(sentence2.substr(3,9));//it slices specific values from the string
console.log(sentence1.substring(0,4));
console.log(sentence2.toString());
console.log(sentence1.split(" "));
console.log(sentence2.trim());//It trims the white space from the left and right side of the string.

//Array Methods
arr1=[1,2,3,4,5,6];
arr2=["Rio","Tokyo","Proffessor",[1,4]];
console.log(arr1);
console.log(arr2);
console.log(arr2.toString());//converts array to string
console.log(arr1.join("#"));//method also joins all array elements into a string It behaves just like toString(), but in addition you can specify the separator
//pop removes array element.push adds array element
arr2[1]="New York";// Changes the second element of fruits to "Kiwi"
console.log(arr2);
console.log(arr2.splice(0,1,"Kiwi","Lemon"));//splice() method can be used to add new items to an arraylog(arr2);
console.log(arr2);
