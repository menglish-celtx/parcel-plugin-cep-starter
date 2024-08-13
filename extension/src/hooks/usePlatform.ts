import { useEffect, useState } from "react";
import { useExtension } from "./useExtension";

export function usePlatform() {
  const [platform, setPlatfrom] = useState(null);
  const { isInCEPEnvironment } = useExtension();

  useEffect(() => {
    if (isInCEPEnvironment) {
      setPlatfrom(global.cep_node.require("process").platform);
    }
  }, [isInCEPEnvironment]);

  return platform;
}