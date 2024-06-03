'use client';

import { IBoard } from "@/lib/database/models/board.model";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export const BoardsViewer = ({ boards }: { boards: IBoard[]; }) => {

  const router = useRouter();

  useEffect(() => {
    if (boards.length > 0) {
      router.push('/' + boards[0]._id);
    }
  }, [boards]);

  if (boards.length === 0)
    return null;

  return (
    <div>{boards.length > 0 &&
      <p>{boards[0].name}</p>
    }</div>
  );
};
