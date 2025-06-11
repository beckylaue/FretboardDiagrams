function createFileName(root, scale) {
    let name = root + " " + scale.name;
    name = name.replaceAll("♭", "flat");
    name = name.replaceAll("𝄫", "dblflat");
    name = name.replaceAll("♯", "sharp");
    name = name.replaceAll("♮", "natural");
    name = name.toLowerCase();
    name = name.replaceAll(" ", "_");
    name = name.replaceAll("'", "");
  
    return name;
  }
  
  export default createFileName;