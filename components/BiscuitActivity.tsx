import React from "react";
import BiscuitInfoText from "@/components/BiscuitInfoText";

interface BiscuitActivityProps {
  whoPressed?: string;
}

export default function BiscuitActivity({whoPressed}: BiscuitActivityProps): React.ReactElement {
  return (
    <BiscuitInfoText>
      The last person who pressed the button was <strong className="text-red-400">{whoPressed}</strong>.
    </BiscuitInfoText>
  )
}
