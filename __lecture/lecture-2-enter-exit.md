# 4.7.2 Enter/Exit animations

---

### What if we want something to _fade in on mount_?

---

How would you solve this?

---

### Keyframe animations

Part of CSS, not React:

```css
@keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

.wrapper {
  animation: fadeIn 500ms;
}
```

---

### In styled-components

Super similar!

```js
import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const Wrapper = styled.div`
  animation: ${fadeIn} 500ms;
`;
```

---

# Exercises

Add a fade-in animation

---

https://codesandbox.io/s/vigorous-snyder-x3px9
//solution:
const fadeIn = keyframes`
from {
transform: translateY(10px);
opacity: 0;
}

to {
transform: translateY(0);
opacity: 1;
}
`;

Add in wrapper:
animation: \${fadeIn} 500ms;

---

https://codesandbox.io/s/keen-tharp-nkleq
Solution:
const zip = keyframes`0% { transform: translateX(-100px); } 85% { transform: translateX(6px); } 100% { transform: translateX(0px); }`;

const Wrapper = styled.div`font-size: 72px; animation: ${zip} 1400ms;`;

---

### What about exit animations?

What if you need to animate something as it unmounts?

---

### Short answer: Don't.

It's usually not worth the trouble.

---

### Longer answer: Use a tool

[`react-transition-group`](https://reactcommunity.org/react-transition-group/) exists to solve this problem.

But seriously, maybe just don't.
