const funcReplacement = {
  F: {
    " ": "",
    "@": "",
    "&": "",
    // comparison
    "=": "===",
    ";": "!==",
    "≠": "!==",
    "<": "<=",
    ">": ">=",
    "</=": "<=",
    ">/=": ">=",
    // logical
    ",": "&&",
    "/": "||",
    "-": "!",
    "~": "^",
  },
  M: {
    _: "",
    "@": "",
    "&": "",
    // Constants
    pi: "Math.PI",
    π: "Math.PI",
    e: "Math.E",
    ln2: "Math.LN2",
    ln10: "Math.LN10",
    log2e: "Math.LOG2E",
    log10e: "Math.LOG10E",
    root2: "Math.SQRT2",
    "root1/2": "Math.SQRT1_2",
    // Basic
    abs: "Math.abs",
    floor: "Math.floor",
    ceil: "Math.ceil",
    round: "Math.round",
    trunc: "Math.trunc",
    // Exponential & Logarithm
    exp: "Math.exp",
    ln: "Math.log",
    log: "Math.log10",
    log2: "Math.log2",
    // Power & Roots
    pow: "Math.pow",
    root: "Math.sqrt",
    "√": "Math.sqrt",
    cuberoot: "Math.cbrt",
    // Trigonometric
    sin: "Math.sin",
    cos: "Math.cos",
    tan: "Math.tan",
    asin: "Math.asin",
    acos: "Math.acos",
    atan: "Math.atan",
    atan2: "Math.atan2",
    // other
    rand: "Math.random",
    max: "Math.max",
    min: "Math.min",
    sign: "Math.sign",
    hypot: "Math.hypot",
    // parentheses & signs
    "[": "(",
    "]": ")",
    "{": "(",
    "}": ")",
    "⋅": "*",
    of: "*",
    "×": "*",
    "÷": "/",
    "%": "/100",
    mod: "%",
  },
};

const Formats = (state) => {
  const ranged = state.replace(/(\d+)\.\.\.(\d+)/g, (match, start, end) => {
    const startNum = parseInt(start, 10);
    const endNum = parseInt(end, 10);

    const rangeArray = Array.from(
      { length: endNum - startNum + 1 },
      (_, index) => startNum + index
    );
    return JSON.stringify(rangeArray);
  });
  const resultString = ranged.replace(
    /(\[[^\[\]]*?\])(?:\s*\+\s*(\[[^\[\]]*?\]))+/g,
    (match) => {
      const arrays = match.match(/(\[[^\[\]]*?\])|(["'`].*?["'`])/g);

      return `[${arrays
        .map((item) => (item.startsWith("[") ? `...${item.trim()}` : item))
        .join(", ")}]`;
    }
  );

  return resultString;
};

export { funcReplacement, Formats };
