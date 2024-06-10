import { redirect } from "next/navigation";

export default async function BoardPage({
  params: { boardId, topicId },
  children
}: {
  params: { boardId: string, topicId: string; };
  children: React.ReactNode;
}) {

  if (topicId)
    redirect('/' + boardId + '/' + topicId);

  return (
    <div className="w-full h-10 flex items-center justify-center rounded-tl-lg">
      Please select a tab
    </div>
  );
}
