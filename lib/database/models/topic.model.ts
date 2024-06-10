import { SubjectKeys, TopicKeys } from '@/constants';
import { Schema, model, models } from 'mongoose';

export interface ITopic {
  [TopicKeys.ID]: string;
  [TopicKeys.NAME]: string;
  [TopicKeys.SUBJECTS]: ITopicSubject[];
}

export interface ITopicSubject extends Omit<ITopic, TopicKeys.SUBJECTS> {}

const TopicSchema = new Schema<ITopic>({
  [TopicKeys.NAME]: { type: String, required: true },
  [TopicKeys.SUBJECTS]: [{ type: Schema.Types.Mixed, required: true }],
});

const Topic = models.Topic || model('Topic', TopicSchema);

export default Topic;
