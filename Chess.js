const arrayOfFiles = document.querySelectorAll('.files');

const filesNameArray = ["a","b","c","d","e","f","g","h"];

let fileNumber = 0;

for(const i of arrayOfFiles) {

    let counter = 1;

    for(const j of i.children) {
        j.setAttribute("id",filesNameArray[fileNumber] + counter);
        counter++;
    }
    fileNumber++;
}
