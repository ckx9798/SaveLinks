import { normalizeInstagramUrl, normalizeYoutubeUrl } from "../../utils/urlUtils";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import Button from "../Button";
import { addShortsLink } from "../../api/shorts";
import { useState } from "react";

export default function AddShorts() {
  const [newShortsLink, setNewShortsLink] = useState("");
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: addShortsLink,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["shorts"] });
      setNewShortsLink("");
    },
  });

  const handlePostNewLink = async () => {
    let cleanedLink = newShortsLink.trim();

    if (cleanedLink.includes("youtube.com")) {
      cleanedLink = normalizeYoutubeUrl(cleanedLink);
    } else if (cleanedLink.includes("instagram.com")) {
      cleanedLink = normalizeInstagramUrl(cleanedLink);
    }
    mutation.mutate(cleanedLink);
  };

  return (
    <div className="flex max-h-[120px] w-full max-w-[800px] items-center justify-between rounded-xl border-2 border-primary bg-gray01 px-3 py-2 md:px-5 md:py-2">
      <div className="flex w-full gap-5">
        <img src="/link.svg" alt="링크이미지" loading="eager" fetchPriority="high" />
        <input
          placeholder="Try adding a link"
          className="text-md mr-5 w-full bg-inherit px-2 focus:outline-none md:py-2 xl:text-2xl"
          value={newShortsLink}
          onChange={(e) => {
            setNewShortsLink(e.target.value);
          }}
        />
      </div>
      <Button size="xs" text="Add" onClick={handlePostNewLink} />
    </div>
  );
}
