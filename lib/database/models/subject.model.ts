import { SubjectKeys } from '@/constants';
import { Schema, model, models } from 'mongoose';

export interface ISubject {
  [SubjectKeys.ID]: string;
  [SubjectKeys.NAME]: string;
  [SubjectKeys.VALUE]: string;
}

const SubjectSchema = new Schema<ISubject>({
  [SubjectKeys.NAME]: { type: String, required: true },
  [SubjectKeys.VALUE]: { type: String, required: true },
});

const Subject = models.Subject || model('Subject', SubjectSchema);

export default Subject;
