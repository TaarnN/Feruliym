# Feruliym Project

The logical, mathematical, arrays manager and more! It makes the code be cleaner. 👍 👍

## Examples 

normal TS :

```typescript
if ((1 > 2 && 4 === 5) || (false && !true)) {
  console.log("Hello, world!");
}
```

TS with Feruliym F function - logical & comparison manager :

```typescript
import { F } from "feruliym";

const rules = `[1 > 2, 3 = 4] / [5, -6]`;

if (F(rules)(1, 2, 4, 5, false, true)) {
  console.log("Hello, world!");
}
```

Or using & for real number :
```typescript
import { F } from "feruliym";

const rules = `[&1 > &2, &4 = &5] / [false, -true]`;

if (F(rules)()) {
  console.log("Hello, world!");
}
```