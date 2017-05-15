import { MarujeoPage } from './app.po';

describe('marujeo App', () => {
  let page: MarujeoPage;

  beforeEach(() => {
    page = new MarujeoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
