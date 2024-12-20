/**
|--------------- Feruliym Project ----------------
|   The logical, mathematical manager and more! It makes the code be cleaner.
|---------- By Somchai Jaidee, Alias -------------
|--------- https://github.com/TaarnN -------------
*/
import { funcReplacement, Formats } from "./replacements.js";
/**
|---------------- Customization ------------------
*/
const Additions = {
  Ffunc_Replacements_Additions: {},
  Mfunc_Replacements_Additions: {},
};
/**
|-------------------------------------------------
*/
export const lastRules = {
  value: [""],
};
export const createFRLYFunction = (runner) => {
  return (...rules) =>
    (...params) =>
      runner(rules.length > 0 ? rules : lastRules.value, params);
};
/**
|--------------------------------------------------
Format of createFRLYFunction :
const RunnerName = (rules, params) => {
let state = rules[0];
// ...
return new Function(`return (${state})`)();
}
const Fname = createFRLYFunction(RunnerName)
|--------------------------------------------------
Format of using createFRLYFunction :
Fname(`...rules`)(...parameters)
|--------------------------------------------------
*/

// Logical Function F()
const Ffunc = (rules, params) => {
  let state = rules[0];

  params.forEach((bool, index) => {
    const target = (index + 1).toString();
    const replacement = bool.toString();
    state = state.replace(new RegExp(`(?<!&)${target}`, "g"), replacement);
  });
  const replacements = Object.assign(
    funcReplacement.F,
    Additions.Ffunc_Replacements_Additions
  );

  const regex = new RegExp(Object.keys(replacements).join("|"), "g");
  state = state
    .replace(regex, (matched) => replacements[matched])
    // parentheses
    .replace(/\[/g, "(")
    .replace(/\]/g, ")")
    .replace(/\{/g, "(")
    .replace(/\}/g, ")");
  return new Function(`return (${state})`)();
};

// Mathematical Function M()
const Mfunc = (rules, params) => {
  let state = rules[0];

  params.forEach((n, index) => {
    const target = (index + 1).toString();
    const replacement = n.toString();
    state = state.replace(
      new RegExp(`(?<!&)${target}(?!\\.)`, "g"),
      replacement
    );
  });
  const replacements = Object.assign(
    funcReplacement.M,
    Additions.Mfunc_Replacements_Additions
  );
  const regex = new RegExp(Object.keys(replacements).join("|"), "g");
  state = state.replace(regex, (matched) => replacements[matched]);

  return new Function(`return (${state})`)();
};

// Array function A()
const Afunc = (rules, params) => {
  let state = rules[0];

  params.forEach((n, index) => {
    const target = (index + 1).toString();
    const replacement = n.toString();
    state = state.replace(
      new RegExp(`(?<!&)${target}(?!\\.)`, "g"),
      replacement
    );
  });

  state = Formats(state);

  return new Function(`return (${state})`)();
};

// Export

export const R = (v) => {
  lastRules.value[0] = v;
};
export const F = createFRLYFunction(Ffunc);
export const M = createFRLYFunction(Mfunc);
export const A = createFRLYFunction(Afunc);

R(`1...9`)
console.log(A()())