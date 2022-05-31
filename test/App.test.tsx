import { cleanup, render, screen, waitFor } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import 'whatwg-fetch';

import '@testing-library/jest-dom';
import App from '../src/App';

const server = setupServer(
  rest.get('http://localhost:3001/api', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ message: 'マーティン・大塚' }));
  })
);

beforeAll(() => server.listen());
afterEach(() => {
  server.resetHandlers();
  cleanup();
});
afterAll(() => server.close());

describe('App.ts mockテスト', () => {
  it('fetch成功', async () => {
    render(<App />);
    await waitFor(() => expect(screen.getByText('マーティン・大塚')).toBeInTheDocument());
    screen.debug();
  });
  it('fetch失敗', async () => {
    server.use(
      rest.get('http://localhost:3001/api', (req, res, ctx) => {
        return res(ctx.status(404));
      })
    );
    render(<App />);
    await waitFor(() => expect(screen.getByText('ミッションフェイルド')).toBeInTheDocument());
    screen.debug();
  });
});
