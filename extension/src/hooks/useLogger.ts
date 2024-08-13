import { logPath, logger } from "../logger";
import { usePlatform } from "./usePlatform";

export function useLogger() {
  const platform = usePlatform();

  const logMessage = async (level: string, message: string = "log") => {
    logger[level](message)
  }

  const openLog = async () => {
    if (platform === 'darwin') {
      const child = global.cep_node.require('child_process')
      child.spawn('open', [logPath])
    }
  }

  return {
    logMessage,
    openLog,
    logPath,
  };
}