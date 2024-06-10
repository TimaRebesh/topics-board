'use client';

import { IBoard } from "@/lib/database/models/board.model";
import { useParams, useRouter } from "next/navigation";
import { useEffect } from "react";

export const BoardsViewer = ({ boards }: { boards: IBoard[]; }) => {

  const params = useParams();
  const router = useRouter();

  useEffect(() => {
    if (boards.length > 0 && params.boardId && !params.topicId) {
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
