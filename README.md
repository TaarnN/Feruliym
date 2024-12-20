# Feruliym Project

[Github Link 🔗](https://github.com/TaarnN/Feruliym)

### version 1.2.0

The logical, Mathematical manager and more! It makes the code be cleaner. 👍 👍

Its pronunciation is like `fɜː ruː liː jʌm`, yeah, it's so weird.

## Installation

By using NPM

```bash
npm install @ttaarrnn/feruliym
```

If you use another installer, correct the spelling of the name `@ttaarrnn/feruliym`.

## Examples

normal TS :

```typescript
if ((1 > 2.33 && 4 === 5) || (false && !true)) {
  console.log("Hello, world!");
}
```

TS with Feruliym F function - logical & comparison manager :

```typescript
import { F } from "@ttaarrnn/feruliym";

const rules = `[1 > 2, 3 = 4] / [5, -6]`;

if (F(rules)(1, 2.33, 4, 5, false, true)) {
  console.log("Hello, world!");
}
```

Or using & for real number ( unrecommended, and important to add every & infront of every single number, even the decimal point number! ) :

```typescript
import { F } from "@ttaarrnn/feruliym";

const rules = `[&1 > &2.&3&3, &4 = &5] / [false, -true]`;

if (F(rules)()) {
  console.log("Hello, world!");
}
```

## Update 1.2.0

Add new function : A() - Array Manager

(In development)

## Usage

Feruliym functions have 2 parts when calling them.

1. Rules
   The string that contains special signs and parameter indexes.

   - Special Signs:
     They're specially in each functions
   - Parameter Indexes:
     They're numbers for replacements by parameters from the second part

2. Parameters
   They're data to replace parameter indexes in rules part

### Example

```typescript
// In M function - Mathematical manager

let x = 10;
console.log(M(`1% * abs(2 - 3)`)(x, 5, 5 - x));
```

### Explanation

The rules part is `"1% * abs(2 - 3)"`.

In M function, % (percentage) sign will be replaced by "/100" and abs will be replaced by "Math.abs".

So, Feruliym will interpret the rules part as `"1/100 * Math.abs(2 - 3)"`.

The parameters part is `x, 5, 5 - x`,
while x is variable containing the value of 10, so parameter part after replace variable with real value and calculation will be `10, 5, -5`.

Then, the function will replace index numbers with parameters in order.

The final result will be `"10/100 * Math.abs(5 - -5)"`, and the function will interpret the result as `1`

## All Functions

| Name | Description                                                               | Example                                      |
| ---- | ------------------------------------------------------------------------- | -------------------------------------------- |
| F    | Use for logically management and comparison                               | F(\`(1, 2) / (3; 4)\`)(true, true, "6", "4") |
| M    | Use for Mathematically management, including Math functions and constants | M(\`√(2) + pi\`)()                           |

## All replacements

| In rules | Replace by   | Function     |
| -------- | ------------ | ------------ |
| @        | Empty Str    | M/F function |
| &        | Empty Str    | M/F function |
| \_       | Empty Str    | M function   |
|          |              |
| =        | ===          | F function   |
| ;        | !==          | F function   |
| ≠        | !==          | F function   |
| <        | <=           | F function   |
| >        | >=           | F function   |
| </=      | <=           | F function   |
| >/=      | >=           | F function   |
| ,        | &&           | F function   |
| /        | \|\|         | F function   |
| -        | !            | F function   |
| ~        | ^            | F function   |
|          |              |
| pi       | Math.PI      | M function   |
| e        | Math.E       | M function   |
| ln2      | Math.LN2     | M function   |
| ln10     | Math.LN10    | M function   |
| log2e    | Math.LOG2E   | M function   |
| log10e   | Math.LOG10E  | M function   |
| root2    | Math.SQRT2   | M function   |
| root1/2  | Math.SQRT1_2 | M function   |
| abs      | Math.abs     | M function   |
| floor    | Math.floor   | M function   |
| ceil     | Math.ceil    | M function   |
| round    | Math.round   | M function   |
| trunc    | Math.trunc   | M function   |
| exp      | Math.exp     | M function   |
| ln       | Math.log     | M function   |
| log      | Math.log10   | M function   |
| log2     | Math.log2    | M function   |
| pow      | Math.pow     | M function   |
| root     | Math.sqrt    | M function   |
| √        | Math.sqrt    | M function   |
| cuberoot | Math.cbrt    | M function   |
| sin      | Math.sin     | M function   |
| cos      | Math.cos     | M function   |
| tan      | Math.tan     | M function   |
| asin     | Math.asin    | M function   |
| acos     | Math.acos    | M function   |
| atan     | Math.atan    | M function   |
| atan2    | Math.atan2   | M function   |
| rand     | Math.random  | M function   |
| max      | Math.max     | M function   |
| min      | Math.min     | M function   |
| sign     | Math.sign    | M function   |
| hypot    | Math.hypot   | M function   |
| [        | \(           | M/A function |
| ]        | \)           | M/A function |
| {        | \(           | M/A function |
| }        | \)           | M/A function |
| ⋅        | \*           | M function   |
| ×        | \*           | M function   |
| ÷        | /            | M function   |
| %        | /100         | M function   |
| mod      | %            | M function   |

## Creator

Somchai Jaidee, Alias

Hello 👋, I'm 11 years old and I'm in grade 6.

### Link(s)

- [Github](https://github.com/TaarnN)
