/**
|--------------- Feruliym Project ----------------
| 
|---------- By Somchai Jaidee, Alias -------------
|--------- https://github.com/TaarnN -------------
*/

/**
|---------------- Customization ------------------
*/
const Additions = {
  Ffunc_Operators_Additions: {},
  Mfunc_Operators_Additions: {},
};
/**
|-------------------------------------------------
*/

export const createFRLYFunction = (
  runner: (rules: string, params: any[]) => any
) => {
  return (rules: string): any =>
    (...params: any[]): any =>
      runner(rules, params);
};

/**
|--------------------------------------------------
Format of createFRLYFunction :
const RunnerName = (rules: string, params: any[]) => {
  let state = rules;
  // ...
  return new Function(`return (${state})`)();
}
const Fname = createFRLYFunction(RunnerName)
|--------------------------------------------------
Format of using createFRLYFunction :
Fname(`...rules`)(...parameters)
|--------------------------------------------------
*/

// Normal Replace function N()
const Nfunc = (rules: string, params: any[]) => {
  let state = rules;

  params.forEach((v, index) => {
    const target = (index + 1).toString();
    const replacement = v.toString();

    state = state.replace(new RegExp(`(?<!)\\{${target}\\}`, "g"), replacement);
  });

  return new Function(`return (${state})`)();
};

// Logical Function F()

const Ffunc = (rules: string, params: any[]) => {
  let state = rules;

  params.forEach((bool, index) => {
    state = state.replace((index + 1).toString(), `${new Boolean(bool)}`);
  });

  if (/\d/.test(state)) {
    throw new Error(
      `Rules overused parameters: ${state.match(/\d/)}. Parameters size: ${
        params.length
      }`
    );
  }

  const replacements: { [key: string]: string } = {
    " ": "", // clear all spaces
    "@": "", // use @ sign for more readability only

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
    "~": "^", // XOR

    // parentheses
    "[": "(",
    "]": ")",
    "{": "(",
    "}": ")",

    ...Additions.Ffunc_Operators_Additions,
  };

  const regex = new RegExp(Object.keys(replacements).join("|"), "g");
  state = state.replace(regex, (matched: string) => replacements[matched]);

  return new Function(`return (${state})`)();
};

// Mathematical Function M()

const Mfunc = (rules: string, params: any[]) => {
  let state = rules;

  params.forEach((n, index) => {
    const target = (index + 1).toString();
    const replacement = n.toString();

    state = state.replace(
      new RegExp(`(?<!&)${target}(!\\.)`, "g"),
      replacement
    );
  });

  const replacements: { [key: string]: string } = {
    _: "", // use _ for more readability only, like 1_000_000 as 1000000
    "@": "", // use @ sign for more readability only
    "&": "", // use & for define the number won't be replaced by parameter

    // Constants
    pi: "Math.PI",
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
    "×": "*",
    "÷": "/",
    "%": "/100",
    mod: "%",

    ...Additions.Mfunc_Operators_Additions,
  };

  const regex = new RegExp(Object.keys(replacements).join("|"), "g");
  state = state.replace(regex, (matched: string) => replacements[matched]);

  return new Function(`return (${state})`)();
};

// Export

export const N = createFRLYFunction(Nfunc);
export const F = createFRLYFunction(Ffunc);
export const M = createFRLYFunction(Mfunc);

console.log(N(`Hello, {1}`)(`Jamey!`));
