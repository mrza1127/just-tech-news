const {format_date} = require('../utils/helpers');

test('format_date() returns a date string', () => {
    const date = new Date('2022-08-04 16:12:03');

    expect(format_date(date)).toBe('8/4/2022');
});

test('format_plural() returns a pluralized word', () => {
    const plural = new word('Tiger');

    expect(format_plural(plural)).toBe('Tigers');
});

test('format_url() returns a simplified url string', () => {
    const url1 = format_url('http://test.com/page/1');
    const url2 = format_url('https://www.coolstuff.com/abcdefg/');
    const url3 = format_url('https://www.google.com?q=hello');

    expect(url1).toBe('test.com');
    expect(url2).toBe('coolstuff.com');
    expect(url3).toBe('google.com');
});