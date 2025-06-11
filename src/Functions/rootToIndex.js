function rootToIndex(root) {
    switch (root) {
      case "E":
        return 0;
      case "F":
        return 1;
      case "F♯":
        return 2;
      case "F♯/G♭":
        return 2;
      case "G♭":
        return 2;
      case "G":
        return 3;
      case "G♯":
        return 4;
      case "G♯/A♭":
        return 4;
      case "A♭":
        return 4;
      case "A":
        return 5;
      case "A♯":
        return 6;
      case "A♯/B♭":
        return 6;
      case "B♭":
        return 6;
      case "B":
        return 7;
      case "C":
        return 8;
      case "C♯":
        return 9;
      case "C♯/D♭":
        return 9;
      case "D♭":
        return 9;
      case "D":
        return 10;
      case "D♯":
        return 11;
      case "D♯/E♭":
        return 11;
      case "E♭":
        return 11;
    }
  }
  
  export default rootToIndex;