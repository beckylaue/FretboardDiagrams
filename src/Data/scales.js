const scales = [
    {
      name: "Major Pentatonic",
      formula: ["R", "2", "3", "5", "6"],
    },
    {
      name: "Suspended Pentatonic",
      formula: ["R", "2", "4", "5", "♭7"],
    },
    {
      name: "Quan Ming",
      formula: ["R", "♭3", "4", "♭6", "♭7"],
    },
    {
      name: "Minor Pentatonic",
      formula: ["R", "♭3", "4", "5", "♭7"],
    },
    {
      name: "Altered Pentatonic",
      formula: ["R", "♭2", "4", "5", "6"],
    },
    {
      name: "Balinese Pelog",
      formula: ["R", "♭2", "♭3", "5", "♭6"],
    },
    {
      name: "Hirajōshi",
      formula: ["R", "2", "♭3", "5", "♭6"],
    },
    {
      name: "Iwato",
      formula: ["R", "♭2", "4", "♭5", "♭7"],
    },
    {
      name: "In",
      formula: ["R", "♭2", "4", "5", "♭6"],
    },
    {
      name: "In Sen",
      formula: ["R", "♭2", "4", "5", "♭7"],
    },
    {
      name: "Yo",
      formula: ["R", "2", "4", "5", "6"],
    },
    {
      name: "Bacovia",
      formula: ["R", "3", "4", "♭6", "7"],
    },
    {
      name: "Ionian",
      formula: ["R", "2", "3", "4", "5", "6", "7"],
    },
    {
      name: "Dorian",
      formula: ["R", "2", "♭3", "4", "5", "6", "♭7"],
    },
    {
      name: "Phrygian",
      formula: ["R", "♭2", "♭3", "4", "5", "♭6", "♭7"],
    },
    {
      name: "Lydian",
      formula: ["R", "2", "3", "♯4", "5", "6", "7"],
    },
    {
      name: "Mixolydian",
      formula: ["R", "2", "3", "4", "5", "6", "♭7"],
    },
    {
      name: "Aeolian",
      formula: ["R", "2", "♭3", "4", "5", "♭6", "♭7"],
    },
    {
      name: "Locrian",
      formula: ["R", "♭2", "♭3", "4", "♭5", "♭6", "♭7"],
    },
    {
      name: "Melodic Minor",
      formula: ["R", "2", "♭3", "4", "5", "6", "7"],
    },
    {
      name: "Dorian ♭2",
      formula: ["R", "♭2", "♭3", "4", "5", "6", "♭7"],
    },
    {
      name: "Lydian Augmented",
      formula: ["R", "2", "3", "♯4", "♯5", "6", "7"],
    },
    {
      name: "Lydian Dominant",
      formula: ["R", "2", "3", "♯4", "5", "6", "♭7"],
    },
    {
      name: "Mixolydian ♭13",
      formula: ["R", "2", "3", "4", "5", "♭6", "♭7"],
    },
    {
      name: "Aeolian Half-Diminished",
      formula: ["R", "2", "♭3", "4", "♭5", "♭6", "♭7"],
    },
    {
      name: "Superlocrian",
      formula: ["R", "♭2", "♭3", "♭4", "♭5", "♭6", "♭7"],
    },
    {
      name: "Harmonic Minor",
      formula: ["R", "2", "♭3", "4", "5", "♭6", "7"],
    },
    {
      name: "Locrian ♮13",
      formula: ["R", "♭2", "♭3", "4", "♭5", "6", "♭7"],
    },
    {
      name: "Ionian Augmented",
      formula: ["R", "2", "3", "4", "♯5", "6", "7"],
    },
    {
      name: "Dorian ♯11",
      formula: ["R", "2", "♭3", "♯4", "5", "6", "♭7"],
    },
    {
      name: "Phrygian Dominant",
      formula: ["R", "♭2", "3", "4", "5", "♭6", "♭7"],
    },
    {
      name: "Lydian ♯9",
      formula: ["R", "♯2", "3", "♯4", "5", "6", "♭7"],
    },
    {
      name: "Superlocrian 𝄫7",
      formula: ["R", "♭2", "♭3", "♭4", "♭5", "♭6", "𝄫7"],
    },
    {
      name: "Harmonic Major",
      formula: ["R", "2", "3", "4", "5", "♭6", "7"],
    },
    {
      name: "Dorian Diminished",
      formula: ["R", "2", "♭3", "4", "♭5", "6", "♭7"],
    },
    {
      name: "Phrygian ♭11",
      formula: ["R", "♭2", "♭3", "♭4", "5", "♭6", "♭7"],
    },
    {
      name: "Lydian Minor",
      formula: ["R", "2", "♭3", "♯4", "5", "6", "7"],
    },
    {
      name: "Mixolydian ♭9",
      formula: ["R", "♭2", "3", "4", "5", "6", "♭7"],
    },
    {
      name: "Lydian Augmented ♯9",
      formula: ["R", "♯2", "3", "♯4", "♯5", "6", "7"],
    },
    {
      name: "Locrian 𝄫7",
      formula: ["R", "♭2", "♭3", "4", "♭5", "♭6", "𝄫7"],
    },
    {
      name: "Double Harmonic Major",
      formula: ["R", "♭2", "3", "4", "5", "♭6", "7"],
    },
    {
      name: "Lydian ♯9 ♯13",
      formula: ["R", "♯2", "3", "♯4", "5", "♯6", "7"],
    },
    {
      name: "Ultraphrygian",
      formula: ["R", "♭2", "♭3", "♭4", "5", "♭6", "𝄫7"],
    },
    {
      name: "Hungarian Minor",
      formula: ["R", "2", "♭3", "♯4", "5", "♭6", "7"],
    },
    {
      name: "Oriental",
      formula: ["R", "♭2", "3", "4", "♭5", "6", "♭7"],
    },
    {
      name: "Ionian Augmented ♯9",
      formula: ["R", "♯2", "3", "4", "♯5", "6", "7"],
    },
    {
      name: "Locrian 𝄫3 𝄫7",
      formula: ["R", "♭2", "𝄫3", "4", "♭5", "♭6", "𝄫7"],
    },
    {
      name: "Neapolitan Minor",
      formula: ["R", "♭2", "♭3", "4", "5", "♭6", "7"],
    },
    {
      name: "Lydian ♯13",
      formula: ["R", "2", "3", "♯4", "5", "♯6", "7"],
    },
    {
      name: "Mixolydian Augmented",
      formula: ["R", "2", "3", "4", "♯5", "6", "♭7"],
    },
    {
      name: "Aeolian ♯11",
      formula: ["R", "2", "♭3", "♯4", "5", "♭6", "♭7"],
    },
    {
      name: "Locrian Dominant",
      formula: ["R", "♭2", "3", "4", "♭5", "♭6", "♭7"],
    },
    {
      name: "Ionian ♯9",
      formula: ["R", "♯2", "3", "4", "5", "6", "7"],
    },
    {
      name: "Ultralocrian",
      formula: ["R", "♭2", "𝄫3", "♭4", "♭5", "♭6", "𝄫7"],
    },
    {
      name: "Neapolitan Major",
      formula: ["R", "♭2", "♭3", "4", "5", "6", "7"],
    },
    {
      name: "Leading Whole Tone",
      formula: ["R", "2", "3", "♯4", "♯5", "♯6", "7"],
    },
    {
      name: "Lydian Augmented Dominant",
      formula: ["R", "2", "3", "♯4", "♯5", "6", "♭7"],
    },
    {
      name: "Lydian Dominant ♭13",
      formula: ["R", "2", "3", "♯4", "5", "♭6", "♭7"],
    },
    {
      name: "Locrian Major",
      formula: ["R", "2", "3", "4", "♭5", "♭6", "♭7"],
    },
    {
      name: "Superlocrian ♮9",
      formula: ["R", "2", "♭3", "♭4", "♭5", "♭6", "♭7"],
    },
    {
      name: "Superlocrian 𝄫3",
      formula: ["R", "♭2", "𝄫3", "♭4", "♭5", "♭6", "♭7"],
    },
    {
      name: "Hungarian Major",
      formula: ["R", "♯2", "3", "♯4", "5", "6", "♭7"],
    },
    {
      name: "Ultralocrian 𝄫13",
      formula: ["R", "♭2", "♭3", "♭4", "♭5", "𝄫6", "𝄫7"],
    },
    {
      name: "Hamonic Minor ♭5",
      formula: ["R", "2", "♭3", "4", "♭5", "♭6", "7"],
    },
    {
      name: "Superlocrian ♮6",
      formula: ["R", "♭2", "♭3", "♭4", "♭5", "6", "♭7"],
    },
    {
      name: "Melodic Minor ♯5",
      formula: ["R", "2", "♭3", "4", "♯5", "6", "7"],
    },
    {
      name: "Dorian ♭9 ♯11",
      formula: ["R", "♭2", "♭3", "♯4", "5", "6", "♭7"],
    },
    {
      name: "Nohkan",
      formula: ["R", "2", "♯3", "♯4", "♯5", "6", "7"],
    },
    {
      name: "Romanian Major",
      formula: ["R", "♭2", "3", "♯4", "5", "6", "♭7"],
    },
    {
      name: "Nohkan ♯2",
      formula: ["R", "♯2", "♯3", "♯4", "♯5", "6", "7"],
    },
    {
      name: "Aeolian Diminished",
      formula: ["R", "2", "♭3", "4", "♭5", "♭6", "𝄫7"],
    },
    {
      name: "Superlocrian 𝄫13",
      formula: ["R", "♭2", "♭3", "♭4", "♭5", "𝄫6", "♭7"],
    },
    {
      name: "Melodic Minor ♭5",
      formula: ["R", "2", "♭3", "4", "♭5", "6", "7"],
    },
    {
      name: "Superphrygian ♮13",
      formula: ["R", "♭2", "♭3", "♭4", "5", "6", "♭7"],
    },
    {
      name: "Lydian Augmented ♭3",
      formula: ["R", "2", "♭3", "♯4", "♯5", "6", "7"],
    },
    {
      name: "Persian",
      formula: ["R", "♭2", "3", "4", "♭5", "♭6", "7"],
    },
    {
      name: "Ionian ♯9 ♯13",
      formula: ["R", "♯2", "3", "4", "5", "♯6", "7"],
    },
    {
      name: "Ultraphrygian 𝄫3",
      formula: ["R", "♭2", "𝄫3", "♭4", "5", "♭6", "𝄫7"],
    },
    {
      name: "Neapolitan Minor ♯11",
      formula: ["R", "♭2", "♭3", "♯4", "5", "♭6", "7"],
    },
    {
      name: "Lydian ♯11 ♯13",
      formula: ["R", "2", "3", "♯4", "5", "♯6", "7"],
    },
    {
      name: "Mixolydian Augmented ♯9",
      formula: ["R", "♯2", "3", "4", "♯5", "6", "♭7"],
    },
    {
      name: "Chromatic Hypophrygian Inverse",
      formula: ["R", "♭2", "𝄫3", "4", "♭5", "𝄫6", "𝄫7"],
    },
    {
      name: "Ionian ♭5",
      formula: ["R", "2", "3", "4", "♭5", "6", "7"],
    },
    {
      name: "Dorian ♭11",
      formula: ["R", "2", "♭3", "♭4", "5", "6", "♭7"],
    },
    {
      name: "Phrygian 𝄫3",
      formula: ["R", "♭2", "𝄫3", "4", "5", "♭6", "♭7"],
    },
    {
      name: "Lydian ♭9",
      formula: ["R", "♭2", "3", "♯4", "5", "6", "7"],
    },
    {
      name: "Superlydian Augmented",
      formula: ["R", "♯2", "♯3", "♯4", "♯5", "♯6", "7"],
    },
    {
      name: "Aeolian 𝄫7",
      formula: ["R", "2", "♭3", "4", "5", "♭6", "𝄫7"],
    },
    {
      name: "Locrian 𝄫13",
      formula: ["R", "♭2", "♭3", "4", "♭5", "𝄫6", "♭7"],
    },
    {
      name: "Locrian ♮7",
      formula: ["R", "♭2", "♭3", "4", "♭5", "♭6", "7"],
    },
    {
      name: "Ionian ♯13",
      formula: ["R", "2", "3", "4", "5", "♯6", "7"],
    },
    {
      name: "Dorian ♯5",
      formula: ["R", "2", "♭3", "4", "♯5", "6", "♭7"],
    },
    {
      name: "Phrygian ♯11",
      formula: ["R", "♭2", "♭3", "♯4", "5", "♭6", "♭7"],
    },
    {
      name: "Lydian ♯3",
      formula: ["R", "2", "♯3", "♯4", "5", "6", "7"],
    },
    {
      name: "Mixolydian ♯9",
      formula: ["R", "♯2", "3", "4", "5", "6", "♭7"],
    },
    {
      name: "Altered Altered",
      formula: ["R", "♭2", "𝄫3", "♭4", "♭5", "𝄫6", "𝄫7"],
    },
    {
      name: "Ionian ♭9",
      formula: ["R", "♭2", "3", "4", "5", "6", "7"],
    },
    {
      name: "Lydian Augmented ♯9 ♯13",
      formula: ["R", "♯2", "3", "♯4", "♯5", "♯6", "7"],
    },
    {
      name: "Phrygian 𝄫7",
      formula: ["R", "♭2", "♭3", "4", "5", "♭6", "𝄫7"],
    },
    {
      name: "Lydian ♭13",
      formula: ["R", "2", "3", "♯4", "5", "♭6", "7"],
    },
    {
      name: "Mixolydian ♭5",
      formula: ["R", "2", "3", "4", "♭5", "6", "♭7"],
    },
    {
      name: "Aeolian ♭11",
      formula: ["R", "2", "♭3", "4", "5", "♭6", "♭7"],
    },
    {
      name: "Locrian 𝄫3",
      formula: ["R", "♭2", "𝄫3", "4", "♭5", "♭6", "♭7"],
    },
    {
      name: "Enigmatic",
      formula: ["R", "♭2", "3", "♯4", "♯5", "♯6", "7"],
    },
    {
      name: "Major Hexatonic",
      formula: ["R", "2", "3", "4", "5", "6"],
    },
    {
      name: "Minor Hexatonic",
      formula: ["R", "2", "♭3", "4", "5", "♭7"],
    },
    {
      name: "Ritsu",
      formula: ["R", "♭2", "♭3", "4", "♭6", "♭7"],
    },
    {
      name: "Lydian Hexatonic",
      formula: ["R", "2", "3", "5", "6", "7"],
    },
    {
      name: "Mixolydian Hexatonic",
      formula: ["R", "2", "4", "5", "6", "♭7"],
    },
    {
      name: "Phrygian Hexatonic",
      formula: ["R", "♭3", "4", "5", "♭6", "♭7"],
    },
    {
      name: "Iberian",
      formula: ["R", "♭2", "3", "4", "5", "♭7"],
    },
    {
      name: "Whole-Tone",
      formula: ["R", "2", "3", "♯4", "♭6", "♭7"],
    },
    {
      name: "Augmented",
      formula: ["R", "♯2", "3", "5", "♭6", "7"],
    },
    {
      name: "Tritone",
      formula: ["R", "♭2", "3", "♯4", "5", "♭7"],
    },
    {
      name: "Two-Semitone-Tritone",
      formula: ["R", "♭2", "𝄫3", "♯4", "5", "♭6"],
    },
    {
      name: "Prometheus",
      formula: ["R", "2", "3", "♯4", "6", "♭7"],
    },
    {
      name: "Blues",
      formula: ["R", "♭3", "4", "♭5", "5", "♭7"],
    },
    {
      name: "Blues Heptatonic",
      formula: ["R", "♭3", "3", "4", "♭5", "5", "♭7"],
    },
    {
      name: "Blues Enneatonic",
      formula: ["R", "2", "♭3", "3", "4", "♭5", "5", "6", "♭7"],
    },
    {
      name: "Algerian",
      formula: ["R", "2", "♭3", "4", "♯4", "5", "♭6", "7"],
    },
    {
      name: "Spanish Eight-Tone",
      formula: ["R", "♭2", "♯2", "3", "4", "♭5", "♭6", "♭7"],
    },
    {
      name: "Adonai Malakh",
      formula: ["R", "♭2", "2", "♭3", "4", "5", "♭6", "♭7"],
    },
    {
      name: "Whole-Step Half-Step",
      formula: ["R", "2", "♭3", "4", "♭5", "♭6", "6", "7"],
    },
    {
      name: "Half-Step Whole-Step",
      formula: ["R", "♭2", "♯2", "3", "♯4", "5", "6", "♭7"],
    },
    {
      name: "Bebop Dominant",
      formula: ["R", "2", "3", "4", "5", "6", "♭7", "7"],
    },
    {
      name: "Bebop Major",
      formula: ["R", "2", "3", "4", "5", "♭6", "6", "7"],
    },
    {
      name: "Bebop Melodic Minor",
      formula: ["R", "2", "♭3", "4", "5", "♭6", "6", "7"],
    },
    {
      name: "Bebop Harmonic Minor",
      formula: ["R", "2", "♭3", "4", "5", "♭6", "♭7", "7"],
    },
    {
      name: "Messiaen’s Third Mode",
      formula: ["R", "2", "♭3", "3", "♯4", "5", "♭6", "♭7", "7"],
    },
    {
      name: "Messiaen’s Fourth Mode",
      formula: ["R", "♭2", "2", "4", "♭5", "5", "♭6", "7"],
    },
    {
      name: "Messiaen’s Fifth Mode",
      formula: ["R", "♭2", "4", "♭5", "5", "7"],
    },
    {
      name: "Messiaen’s Sixth Mode",
      formula: ["R", "2", "3", "4", "♭5", "♭6", "♭7", "7"],
    },
    {
      name: "Messiaen’s Seventh Mode",
      formula: ["R", "♭2", "2", "♭3", "4", "♭5", "5", "♭6", "6", "7"],
    },
  ];
  
  export default scales;
  