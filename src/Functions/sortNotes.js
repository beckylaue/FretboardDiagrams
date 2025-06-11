function sortNotes(root) {
    switch (root) {
      case "E":
        return [
          "F",
          "F♯/G♭",
          "G",
          "G♯/A♭",
          "A",
          "A♯/B♭",
          "B",
          "C",
          "C♯/D♭",
          "D",
          "D♯/E♭",
        ];
      case "F":
        return [
          "F♯/G♭",
          "G",
          "G♯/A♭",
          "A",
          "A♯/B♭",
          "B",
          "C",
          "C♯/D♭",
          "D",
          "D♯/E♭",
          "E",
        ];
      case "F♯":
      case "G♭":
        return [
          "G",
          "G♯/A♭",
          "A",
          "A♯/B♭",
          "B",
          "C",
          "C♯/D♭",
          "D",
          "D♯/E♭",
          "E",
          "F",
        ];
      case "G":
        return [
          "G♯/A♭",
          "A",
          "A♯/B♭",
          "B",
          "C",
          "C♯/D♭",
          "D",
          "D♯/E♭",
          "E",
          "F",
          "F♯/G♭",
        ];
      case "G♯":
      case "A♭":
        return [
          "A",
          "A♯/B♭",
          "B",
          "C",
          "C♯/D♭",
          "D",
          "D♯/E♭",
          "E",
          "F",
          "F♯/G♭",
          "G",
        ];
      case "A":
        return [
          "A♯/B♭",
          "B",
          "C",
          "C♯/D♭",
          "D",
          "D♯/E♭",
          "E",
          "F",
          "F♯/G♭",
          "G",
          "G♯/A♭",
        ];
      case "A♯":
      case "B♭":
        return [
          "B",
          "C",
          "C♯/D♭",
          "D",
          "D♯/E♭",
          "E",
          "F",
          "F♯/G♭",
          "G",
          "G♯/A♭",
          "A",
        ];
      case "B":
        return [
          "C",
          "C♯/D♭",
          "D",
          "D♯/E♭",
          "E",
          "F",
          "F♯/G♭",
          "G",
          "G♯/A♭",
          "A",
          "A♯/B♭",
        ];
      case "C":
        return [
          "C♯/D♭",
          "D",
          "D♯/E♭",
          "E",
          "F",
          "F♯/G♭",
          "G",
          "G♯/A♭",
          "A",
          "A♯/B♭",
          "B",
        ];
      case "C♯":
      case "D♭":
        return [
          "D",
          "D♯/E♭",
          "E",
          "F",
          "F♯/G♭",
          "G",
          "G♯/A♭",
          "A",
          "A♯/B♭",
          "B",
          "C",
        ];
      case "D":
        return [
          "D♯/E♭",
          "E",
          "F",
          "F♯/G♭",
          "G",
          "G♯/A♭",
          "A",
          "A♯/B♭",
          "B",
          "C",
          "C♯/D♭",
        ];
      case "D♯":
      case "E♭":
        return [
          "E",
          "F",
          "F♯/G♭",
          "G",
          "G♯/A♭",
          "A",
          "A♯/B♭",
          "B",
          "C",
          "C♯/D♭",
          "D",
        ];
    }
  }
  
  export default sortNotes;