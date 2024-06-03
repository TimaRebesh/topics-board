'use server';

import { connectToDB } from '../database';
import { handleError } from '../utils';

export async function getTopic(userId: string) {
  try {
    await connectToDB();

    return JSON.parse(JSON.stringify({}));
  } catch (error) {
    handleError(error);
  }
}
