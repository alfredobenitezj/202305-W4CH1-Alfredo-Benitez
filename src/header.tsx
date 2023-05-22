type PropsType = {
  label: string;
  user: string;
};

export function Header() {
  const title = "The Pointing gentlement";

  return (
 <>
      <header className="header">
      
      <p>{title.toLocaleUpperCase()}</p>
    </>
  )
  }
