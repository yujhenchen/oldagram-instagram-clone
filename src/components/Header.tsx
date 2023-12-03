type Props = {
  children: React.ReactNode;
};

export default function Header({ children }: Props) {
  return (
    <header className="w-full h-67px flex place-content-between px-15px py-16px border-b-1px border-b-gray border-b-solid">
      {children}
    </header>
  );
}
