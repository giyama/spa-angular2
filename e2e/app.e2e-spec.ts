import { SpaAngular2Page } from './app.po';

describe('spa-angular2 App', () => {
  let page: SpaAngular2Page;

  beforeEach(() => {
    page = new SpaAngular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
