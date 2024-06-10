import { NavBar } from "@/components/navbar/NavBar";
import { getBoard } from "@/lib/actions/boards.actions";
import { redirect } from "next/navigation";

export default async function BoardLayout({
  params,
  children
}: {
  params: { boardId: string; };
  children: React.ReactNode;
}) {

  if (!params.boardId)
    return (
      <div className="w-full h-10 flex items-center justify-center rounded-tl-lg">
        Please select a tab
      </div>);

  const board = await getBoard(params.boardId);

  if (!board) {
    redirect('/');
  }

  return (
    <div className="flex flex-col w-full ">
      <NavBar board={board} />
      {children}
    </div>
  );
}
