type Props = {
  children: React.ReactNode;
};

export default function Header({ children }: Props) {
  return (
    <header className="w-full h-67px flex items-center place-content-between px-15px py-16px border-b-1px border-b-#EDEDED border-b-solid bg-white">
      {children}
    </header>
  );
}
