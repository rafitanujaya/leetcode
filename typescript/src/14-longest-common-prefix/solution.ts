function longestCommontPrefix ( strs : string[]) : string {
    if (strs.length < 1) {
        return "";
    }
    if (strs.length == 1){
        return strs[0];
    }

    let prefix = "";
    let isPrefix = false;
    let firstWord = strs[0];

    for (let i = 0; i < firstWord.length; i++) {
      for (let j = 1; j < strs.length; j++) {
        if (i + 1 > strs[j].length) {
          return prefix;
        } else {
            console.log("ini", firstWord[i]);
          if (firstWord[i] == strs[j][i]) {
            isPrefix = true;
          } else {
            return prefix
          }
        }
      }
      if (isPrefix) {
        prefix += firstWord[i];
        isPrefix = false;
      } else {
        return prefix
      }
    }

    return prefix;
}