'use server';

import { revalidatePath } from 'next/cache';
import { connectToDB } from '../database';
import Board, { IBoard } from '../database/models/board.model';
import { handleError } from '../utils';
import { BoardKeys } from '@/constants';

export async function createBoard(name: string) {
  try {
    await connectToDB();

    const newBoard: Omit<IBoard, BoardKeys.ID> = {
      name,
      [BoardKeys.TOPICS]: [],
    };

    const board = new Board(newBoard);
    await board.save();

    revalidatePath('/');
  } catch (error) {
    handleError(error);
  }
}

export async function getAllBoard() {
  try {
    await connectToDB();

    const boards = await Board.find();

    return JSON.parse(JSON.stringify(boards));
  } catch (error) {
    handleError(error);
  }
}

export async function getBoard(boardId: string) {
  try {
    await connectToDB();

    const board = Board.findById(boardId);

    return JSON.parse(JSON.stringify(board));
  } catch (error) {
    handleError(error);
  }
}
