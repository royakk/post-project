import "./App.css";
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import  {PostsPage} from "./pages";
function App() {
  const queryClient = new QueryClient();
 
  return (
    <>
      <QueryClientProvider client={queryClient}>
      <PostsPage/>
      </QueryClientProvider>
    </>
  );
}

export default App;
