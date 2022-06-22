# A simple project to study react hook

This project implements two buttons. One using react hook UseState and another without using it.

## React Hook - UseState

According to React docs, hooks are a new feature introduced in React 16.8. It allows the use of state and other react features without writing a class.

The useState() hook only require a initial value which can be a number or string. This function doesn't accept an object.
It returns a pair of values. The current state and a function that updates it.

const [count, setCount] = useState(0);

This syntax is similar to this.state.count and this.setState in a class component.