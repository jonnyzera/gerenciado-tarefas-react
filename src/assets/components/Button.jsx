function Button(props) {
  return (
    <Button
      onClick={props.OnClick}
      className="px-4 py-2 font-medium text-white border rounded-md bg-slate-500"
    >
      {props.children}
    </Button>
  );
}

export default Button;
