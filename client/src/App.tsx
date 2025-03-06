import { MantineProvider } from "@mantine/core"
import { RouterProvider } from "react-router-dom";
import { router } from "./Route/route";
import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';
import '@mantine/tiptap/styles.css';
import { theme } from "./utils/Theme";

function App() {
  return (
    <MantineProvider defaultColorScheme="dark" theme={theme}>
      <RouterProvider router={router} />
    </MantineProvider>
  )
}

export default App
