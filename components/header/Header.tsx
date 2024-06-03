import { getAllBoard } from "@/lib/actions/boards.actions";
import { BoardCreator } from "./BoardCreator";
import { IBoard } from "@/lib/database/models/board.model";
import { BoardsViewer } from "./BoardsViewer";

export const Header = async () => {

  const boards = await getAllBoard() as IBoard[];

  return (
    <header className="w-full h-12 bg-header text-permanent-white body-font relative flex justify-between items-center px-4">
      <BoardsViewer boards={boards} />
      <BoardCreator />
    </header>
  );
};
