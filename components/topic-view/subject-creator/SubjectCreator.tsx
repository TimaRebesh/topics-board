'use client';

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { createSubject } from "@/lib/actions/subjects.actions";
import { usePathname } from "next/navigation";
import { useState } from "react";

export const SubjectCreator = ({ topicId }: { topicId: string; }) => {

  const path = usePathname();

  const [value, setValue] = useState('');

  const disabled = value.length < 3;

  const createNewSubject = async () => {
    if (!disabled) {
      await createSubject(value, topicId, path);
      setValue('');
    }
  };

  return (
    <div className="flex gap-2">
      <Input className="w-40" placeholder="provide a name" value={value} onChange={(e) => setValue(e.currentTarget.value)} />
      <Button disabled={disabled} onClick={createNewSubject}>+</Button>
    </div>
  );

};