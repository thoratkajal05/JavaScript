function wordCount(str) {
    var words = str.trim().split(/\s+/);
    return words.length;
}

function countWords() {
    var textInput = document.getElementById("textInput").value;
    var count = wordCount(textInput);
    document.getElementById("wordCount").textContent = "Word count: " + count;
}
