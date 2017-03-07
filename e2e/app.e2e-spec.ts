import { Angular2ValidacionPage } from './app.po';

describe('angular2-validacion App', function() {
  let page: Angular2ValidacionPage;

  beforeEach(() => {
    page = new Angular2ValidacionPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
