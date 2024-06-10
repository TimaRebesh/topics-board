'use server';

import { BoardKeys, TopicKeys } from '@/constants';
import { connectToDB } from '../database';
import Topic, { ITopic } from '../database/models/topic.model';
import { handleError } from '../utils';
import { revalidatePath } from 'next/cache';
import Board from '../database/models/board.model';

export async function createTopic(name: string, boardId: string) {
  try {
    await connectToDB();

    const newTopic: Omit<ITopic, TopicKeys.ID> = {
      name,
      [TopicKeys.SUBJECTS]: [],
    };

    const topic = new Topic(newTopic);

    const board = await Board.findById(boardId);
    board[BoardKeys.TOPICS].push({
      [TopicKeys.ID]: topic[TopicKeys.ID],
      [TopicKeys.NAME]: topic[TopicKeys.NAME],
    });

    await board.save();
    await topic.save();

    revalidatePath('/');
  } catch (error) {
    handleError(error);
  }
}

export async function getTopic(topicId: string) {
  try {
    await connectToDB();

    const topic = await Topic.findById(topicId);

    return JSON.parse(JSON.stringify(topic));
  } catch (error) {
    handleError(error);
  }
}
