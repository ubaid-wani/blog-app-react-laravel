import React from 'react';
import AppRouter from "./routes/routes";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const App: React.FC = () => {
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <AppRouter />
      </QueryClientProvider>
    </>
  )
};

export default App;
