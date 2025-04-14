import NavBar from './NavBar';  

test("it is exported as a default export", () => {
  try {
    expect(() => render(<NavBar />)).not.toThrow();
  } catch (e) {
    throw new Error("Make sure to export this component!");
  }
});
