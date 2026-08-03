function Parent() {
  return (
    <div>
      <h1>Iam the parent component</h1>
      <Child />
    </div>
  );
}
function Child(props) {
  console.log(props);
  return (
    <div>
      <h1>I am the child component</h1>
    </div>
  );
}

export default Parent;
