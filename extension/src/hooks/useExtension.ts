import * as React from "react";
import { evalExtendscript, getExtensionPath, openURLInDefaultBrowser } from 'cep-interface'

/**
 * Retrieves the CEP extension properties from 'cep-interface' and the getInfo() script function.
 * Runs on each render.
 */
export function useExtension() {
  const [extensionProperties, setExtensionProperties] = React.useState({
    evalScript: async (script: string): Promise<string> => {
      console.log("Running Script:", script);
      return `Ran script: ${script}`;
    },
    extensionPath: undefined,
    id: undefined,
    isInCEPEnvironment: false,
    name: undefined,
    openURLInDefaultBrowser: (url: string) => console.log("Opening URL:", url),
    version: undefined,
  });

  React.useEffect(() => {
    async function loadExtensionProperties() {
      const info = await evalExtendscript(`$.global["${process.env.BUNDLE_ID}"].getInfo()`)
      const extensionPath = await getExtensionPath()
      setExtensionProperties({
        evalScript: async (script: string) => evalExtendscript(`$.global["${process.env.BUNDLE_ID}"].${script}`),
        extensionPath,
        id: info.id,
        isInCEPEnvironment: true,
        name: info.name,
        openURLInDefaultBrowser: openURLInDefaultBrowser,
        version: info.version,
      });
    }

    loadExtensionProperties();
  }, []);

  return extensionProperties;
}