import { ITopicSubject } from '@/lib/database/models/topic.model';
import { SubjectCreator } from './subject-creator/SubjectCreator';
import { Subject } from './subject/Subject';

export const TopicView = ({
  topicId,
  subjects
}: {
  topicId: string,
  subjects: ITopicSubject[] | undefined;
}) => {

  return (
    <div className="flex flex-col w-full ">
      {subjects && subjects.map(subject => (
        <Subject key={subject._id} item={subject} />
      ))}
      <SubjectCreator topicId={topicId} />
    </div>
  );
};
