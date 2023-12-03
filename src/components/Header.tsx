type Props = {
  children: React.ReactNode;
};

export default function Header({ children }: Props) {
  return <header>{children}</header>;
}
