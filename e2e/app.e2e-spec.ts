import { PareshWebSitPage } from './app.po';

describe('paresh-web-sit App', () => {
  let page: PareshWebSitPage;

  beforeEach(() => {
    page = new PareshWebSitPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
