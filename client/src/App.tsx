import { MantineProvider } from "@mantine/core"
import { RouterProvider } from "react-router-dom";
import { router } from "./Route/route";
import { theme } from "./utils/Theme";
import '@mantine/core/styles.css';

function App() {

  return (
    <MantineProvider theme={theme}>
      <RouterProvider router={router} />
    </MantineProvider>
  )
}

export default App
