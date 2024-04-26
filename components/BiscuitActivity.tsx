import React from "react";
import BiscuitsInfoText from "@/components/BiscuitsInfoText";

interface BiscuitActivityProps {
  whoPressed?: string;
}

export default function BiscuitActivity({whoPressed}: BiscuitActivityProps): React.ReactElement {
  return (
    <BiscuitsInfoText>
      The last person who pressed the button was <strong className="text-red-400">{whoPressed}</strong>.
    </BiscuitsInfoText>
  )
}
