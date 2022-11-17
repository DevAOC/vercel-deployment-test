import {
  AppType,
  Provider as GadgetProvider,
} from "@gadgetinc/react-shopify-app-bridge";
import { api } from "./api";
import { PolarisProvider } from "./components";

export default function App() {
  return (
    <GadgetProvider
      type={AppType.Embedded}
      shopifyApiKey={process.env["SHOPIFY_API_KEY"]}
      api={api}
    >
      <PolarisProvider>Hello, world!</PolarisProvider>
      /** Gadget's Provider takes care of App Bridge authentication, you do not need
      Shopify's default AppBridgeProvider. Feel free to use the default page
      navigation that the CLI sets up for you! */
    </GadgetProvider>
  );
}