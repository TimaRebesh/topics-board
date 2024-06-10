import { TopicView } from "@/components/topic-view/TopicView";
import { getTopic } from "@/lib/actions/topics.actions";
import { ITopic } from "@/lib/database/models/topic.model";


export default async function TopicPage({
  params: { topicId },
  children
}: {
  params: { topicId: string; };
  children: React.ReactNode;
}) {

  const topic = await getTopic(topicId) as ITopic;

  return (
    <TopicView topicId={topic._id} subjects={topic.subjects} />
  );
}


