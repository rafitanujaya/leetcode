function longestCommontPrefix ( strs : string[]) : string {
    if (strs.length < 1) return "";
    if (strs.length == 1) return strs[0];

    let prefix = "";

    for (let i = 0; i < strs[0].length; i++){
      let char = strs[0][i]
      for (let j = 1; j < strs.length; j++) {
        if (i >= strs[j].length || char != strs[j][i]) {
          return prefix
        }
      }
      prefix += char;
    }
    return prefix;
}

export default longestCommontPrefix