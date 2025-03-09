import '../index.css';
import '../App.css';

import { useState } from 'react';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createRootRoute, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';

export const Route = createRootRoute({
  component: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [queryClient] = useState(
      new QueryClient({
        defaultOptions: {
          queries: {
            retry: 3,
          },
        },
      })
    );
    return (
      <>
        <h1 className="mb-20">Team Member Management</h1>
        <QueryClientProvider client={queryClient}>
          <div>
            <Outlet />
          </div>
        </QueryClientProvider>
        <TanStackRouterDevtools />
      </>
    );
  },
});
