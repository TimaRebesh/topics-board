'use server';

import { SubjectKeys, TopicKeys } from '@/constants';
import { connectToDB } from '../database';
import Subject from '../database/models/subject.model';
import { handleError } from '../utils';
import { revalidatePath } from 'next/cache';
import Topic from '../database/models/topic.model';

export async function createSubject(
  name: string,
  topicId: string,
  pathName?: string
) {
  try {
    await connectToDB();

    const newSubject = new Subject({
      [SubjectKeys.NAME]: name,
    });

    const savedSubject = await newSubject.save();

    const topic = await Topic.findById(topicId);
    topic[TopicKeys.SUBJECTS] = [
      {
        [SubjectKeys.ID]: savedSubject[SubjectKeys.ID],
        [SubjectKeys.NAME]: savedSubject[SubjectKeys.NAME],
      },
      ...topic[TopicKeys.SUBJECTS],
    ];

    await topic.save();

    pathName && revalidatePath(pathName);
  } catch (error) {
    handleError(error);
  }
}

// export async function getSubjectById( string) {
//   try {
//     await connectToDB();

//     const newSubject = new Subject({
//       [SubjectKeys.NAME]: name,
//     });

//     const savedSubject = await newSubject.save();

//     const topic = await Topic.findById(topicId);
//     topic[TopicKeys.SUBJECTS] = [
//       {
//         [SubjectKeys.ID]: savedSubject[SubjectKeys.ID],
//         [SubjectKeys.NAME]: savedSubject[SubjectKeys.NAME],
//       },
//       ...topic[TopicKeys.SUBJECTS],
//     ];

//     await topic.save();

//     revalidatePath('/');
//     // return JSON.parse(JSON.stringify(savedSubject));
//   } catch (error) {
//     handleError(error);
//   }
// }
