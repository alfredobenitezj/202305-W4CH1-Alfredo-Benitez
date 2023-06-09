type PropsType = {
  label: string;
  user: string;
};

export function Header({ label, user }: PropsType) {
  const title = "";

  return (
    <>
      <header className="header">
        <h1>{label}</h1>
      </header>
      <p>{user}</p>
      <p>{title.toLocaleUpperCase()}</p>
    </>
  );
}
