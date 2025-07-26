import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: '**',
    renderMode: RenderMode.Prerender
  },
  {
    path: 'strategies/create/:type',
    renderMode: RenderMode.Client,
  },
  {
    path: 'strategies/:id',
    renderMode: RenderMode.Client,
  },
];
