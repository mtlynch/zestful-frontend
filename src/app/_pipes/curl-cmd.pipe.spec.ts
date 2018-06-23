import { CurlCmdPipe } from './curl-cmd.pipe';

describe('CurlCmdPipe', () => {

  const pipe = new CurlCmdPipe();

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should generate curl command', () => {
    expect(pipe.transform('2 lbs carrots', 'http://dummyurl.com')).toBe(`
curl \\
  --header "Content-Type: application/json" \\
  --data '{
    "ingredients": [
      "2 lbs carrots"
    ]
  }' \\
  "http://dummyurl.com/parseIngredients"`.trim());
  });

  it('should escape single quotes', () => {
    expect(pipe.transform('2 cups tomatoes (don\'t chop them up; you won\'t like it)', 'http://dummyurl.com')).toBe(`
curl \\
  --header "Content-Type: application/json" \\
  --data '{
    "ingredients": [
      "2 cups tomatoes (don\\\'t chop them up; you won\\\'t like it)"
    ]
  }' \\
  "http://dummyurl.com/parseIngredients"`.trim());
  });
});
