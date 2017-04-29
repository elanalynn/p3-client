import { P3ClientPage } from './app.po';

describe('p3-client App', () => {
  let page: P3ClientPage;

  beforeEach(() => {
    page = new P3ClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
