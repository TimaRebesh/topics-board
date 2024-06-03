import { Header } from "@/components/header/Header";
import { getBoard } from "@/lib/actions/boards.actions";

export default async function BoardLayout({
  params,
  children,
}: Readonly<{
  params: { id: string; };
  children: React.ReactNode;
}>) {

  return (
    <>
      {children}
    </>
  );
}
