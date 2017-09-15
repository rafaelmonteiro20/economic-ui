import { EconomicUiPage } from './app.po';

describe('economic-ui App', () => {
  let page: EconomicUiPage;

  beforeEach(() => {
    page = new EconomicUiPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
