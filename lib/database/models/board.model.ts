import { BoardKeys } from '@/constants';
import { Schema, model, models } from 'mongoose';
import { ITopic } from './topic.model';

export interface IBoard {
  [BoardKeys.ID]: string;
  [BoardKeys.NAME]: string;
  [BoardKeys.TOPICS]: ITopic[];
}

const BoardSchema = new Schema<IBoard>({
  [BoardKeys.NAME]: { type: String, required: true },
  [BoardKeys.TOPICS]: [{ type: Schema.Types.Mixed, required: true }],
});

const Board = models.Board || model('Board', BoardSchema);

export default Board;
