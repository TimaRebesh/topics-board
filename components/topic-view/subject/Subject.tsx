import { ITopicSubject } from "@/lib/database/models/topic.model";


export const Subject = ({
  item
}: {
  item: ITopicSubject;
}) => {
  return <div>{item.name}</div>;
};
