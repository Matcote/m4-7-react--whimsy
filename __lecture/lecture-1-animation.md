# 4.7.1 Animation and Whimsy

---

# Why animation?

---

In general, do you prefer using web apps or mobile apps?

---

### Mobile apps tend to have better "UX".

A big part of the discrepancy is around animation and interaction.

---

### Mobile apps "feel" better. They feel organic and alive

Websites often feel static and lifeless.

---

#### Reason 1: Animation is natural, and improves UX

---

#### Reason 2: Animation is a form of communication

<img src="./assets/stripe-error.gif" />

---

#### Reason 3: Animation is an effective way to **direct attention**.

import rainbowButtonSrc from "./assets/rainbow-button.gif";

<img src="./assets/rainbow-button.gif" />

---

#### Reason 4: Animation can be a secret weapon 🗡

- As soon-to-be-jobseekers, your side projects + portfolio website will be the main thing companies will judge you on.
- Tasteful use of animation can make your work stand out.

---

### CSS Transitions

---

### Refresher

```css
.some-class {
  opacity: 0;
  transition: opacity 500ms;
}
```

---

```jsx live=true split=[80,20]
const Demo = () => {
  const [toggled, setToggled] = React.useState(false);

  return (
    <>
      Click me:
      <animated.button
        style={{
          background: "red",
          width: 50,
          height: 50,
          transform: toggled ? "translateY(200px)" : "translateY(0px)",
          transition: "transform 500ms",
        }}
        onClick={() => {
          setToggled(!toggled);
        }}
      />
    </>
  );
};

render(<Demo />);
```

---

### Exercises

Produce the following animations

---

https://codesandbox.io/s/floral-dream-d517n

//Solution: Add to const Surface
transition: all ease 300ms;
&:hover{
cursor: pointer;
transform: translate(-8px, -8px);
}

---

https://codesandbox.io/s/beautiful-ishizaka-c48ho?file=/src/App.js
//solution: change z-index on gloss and On

---

Are these animations good or bad?

---

### It depends!

- If _every_ button did the shadow lift effect, it might get kind of annoying.
- If _very important_ buttons do it, it's a good way to raise their significance.

---

### React Spring

- Uses physics to produce really nice easing
- Runs in JS instead of through CSS
- Graceful interrupts

---

### Fancy demos

https://codesandbox.io/embed/j0y0vpz59

https://codesandbox.io/embed/01p1kxymow

---

### How to use

```js
import { useSpring, animated } from "react-spring";

const Demo = () => {
  const [toggled, setToggled] = React.useState(false);

  const style = useSpring({
    transform: toggled ? "translateY(200px)" : "translateY(0px)",
  });

  return <animated.button style={style} onClick={() => setToggled(!toggled)} />;
};
```

---

```js live=true
const Demo = () => {
  const [toggled, setToggled] = React.useState(false);

  const style = useSpring({
    transform: toggled ? "translateY(200px)" : "translateY(0px)",
  });

  return (
    <>
      <animated.button
        style={{
          background: "red",
          width: 50,
          height: 50,
          ...style,
        }}
        onClick={() => setToggled(!toggled)}
      />
    </>
  );
};

render(<Demo />);
```

---

- `useSpring` returns an object full of special objects.
- `animated.div` is a `div` that knows how to use that special object.

---

### Passing a config

```js live=true split=[80,20]
const Demo = () => {
  const [toggled, setToggled] = React.useState(false);

  const style = useSpring({
    transform: toggled ? "translateY(200px)" : "translateY(0px)",
    config: {
      tension: 200,
      friction: 1,
    },
  });

  return (
    <>
      <animated.button
        style={{
          background: "red",
          width: 50,
          height: 50,
          ...style,
        }}
        onClick={() => setToggled(!toggled)}
      />
    </>
  );
};

render(<Demo />);
```

---

### Tools to come up with settings:

https://react-spring-visualizer.com/

https://chenglou.github.io/react-motion/demos/demo5-spring-parameters-chooser/
