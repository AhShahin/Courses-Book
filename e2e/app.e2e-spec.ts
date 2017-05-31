import { ReactivePatternsPage } from './app.po';

describe('reactive-patterns App', () => {
  let page: ReactivePatternsPage;

  beforeEach(() => {
    page = new ReactivePatternsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
