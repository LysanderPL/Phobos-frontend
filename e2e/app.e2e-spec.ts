import { PhobosFrontendPage } from './app.po';

describe('phobos-frontend App', () => {
  let page: PhobosFrontendPage;

  beforeEach(() => {
    page = new PhobosFrontendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
