describe('Pattern Tests', function() {

  describe('True Email Tests', function () {
    it('works for simple email', function() {
      expect(Pattern.isValidEmail("email@test.com")).toEqual(true);
    });

    it('works with dots', function() {
      expect(Pattern.isValidEmail('very.common@example.com')).toEqual(true);
    });

    it('works with a fairly long email', function () {
      expect(Pattern.isValidEmail('a.little.lengthy.but.fine@dept.example.com')).toEqual(true);
    });

    it('works with a + sign', function () {
      expect(Pattern.isValidEmail('disposable.style.email.with+symbol@example.com')).toEqual(true);
    });

    it('works with spaces within quotes', function () {
      expect(Pattern.isValidEmail('"much.more unusual"@example.com')).toEqual(true);
    });

    it('works with a dot after to @ sign within quotes', function () {
      expect(Pattern.isValidEmail('"very.unusual.@.unusual.com"@example.com')).toEqual(true);
    });

    it('works with all these special characters', function () {
      expect(Pattern.isValidEmail("!#$%&'*+-/=?^_`{}|~@example.org")).toEqual(true);
    });

    it('works with a space between quotes', function () {
      expect(Pattern.isValidEmail('" "@example.org')).toEqual(true);
    });

    it('works with dashes', function () {
      expect(Pattern.isValidEmail('other.email-with-dash@example.com')).toEqual(true);
    });

  });

  describe('False Email Tests', function () {
    it("doesn't work when there is no @ sign", function() {
      expect(Pattern.isValidEmail("test.com")).toEqual(false);
    });

    it("doesn't work with multiple @ signs", function() {
      expect(Pattern.isValidEmail("test@test@test.com")).toEqual(false);
    });

    it('does not work with top level domains', function () {
      expect(Pattern.isValidEmail('postbox@com')).toEqual(false);
    });

    it('does not work with an IP address', function () {
      expect(Pattern.isValidEmail('user@[IPv6:2001:db8:1ff::a0b:dbd0]')).toEqual(false);
    });

    it("doesn't work with special characters", function () {
      expect(Pattern.isValidEmail('"a"b(c)d,e:f;g<h>i[j\k]l@example.com"')).toEqual(false);
    });

    it("doesn't work with quotes without dot separator", function () {
      expect(Pattern.isValidEmail('just"not"right@example.com')).toEqual(false);
    });

    it("doesn't work with spaces and slashes outside of quotes", function () {
      expect(Pattern.isValidEmail('this is"not\allowed@example.com')).toEqual(false);
    });

    it("doesn't work with escaped spaces and slashes", function() {
      expect(Pattern.isValidEmail('this\ still\"not\\allowed@example.com')).toEqual(false);
    });

    it('does not work with unicode characters', function () {
      expect(Pattern.isValidEmail('üñîçøðé@üñîçøðé.com')).toEqual(false);
    });
  });

  describe('True phone tests', function () {
    it('works with a regular 10 digit phone number', function () {
      expect(Pattern.isValidPhoneNumber('3122832345')).toEqual(true);
    });

    it('works with a regular 7 digit phone number', function () {
      expect(Pattern.isValidPhoneNumber('8023518')).toEqual(true);
    });

    it('works with parenthesis around the first 3 digits', function () {
      expect(Pattern.isValidPhoneNumber('(312)4567890')).toEqual(true);
    });

    it('works with dashes', function () {
      expect(Pattern.isValidPhoneNumber('312-456-1234')).toEqual(true);
    });

    it('works with an int', function () {
      expect(Pattern.isValidPhoneNumber(3124567890)).toEqual(true);
    });

    it('works with a US country code', function () {
      expect(Pattern.isValidPhoneNumber(13128045982)).toEqual(true);
    });

    it('works with a + sign and country code', function () {
      expect(Pattern.isValidPhoneNumber(+13128742345)).toEqual(true);
    });

    it('works with a space after the country code', function () {
      expect(Pattern.isValidPhoneNumber('+1 3128022743')).toEqual(true);
    });

    it('works with spaces', function () {
      expect(Pattern.isValidPhoneNumber('321 234 5345')).toEqual(true);
    });

    it('works with dots', function () {
      expect(Pattern.isValidPhoneNumber('412.842.2123')).toEqual(true);
    });

  });

  describe('False phone tests', function () {
    it("won't work with random spaces", function () {
      expect(Pattern.isValidPhoneNumber('31 3 0843 234')).toEqual(false);
    });

    it("won't work with random dashes", function () {
      expect(Pattern.isValidPhoneNumber('31-634-313234')).toEqual(false);
    });

    it("won't work with random dots", function () {
      expect(Pattern.isValidPhoneNumber('32.345.12456')).toEqual(false);
    });

    it("won't work with less than seven digits", function () {
      expect(Pattern.isValidPhoneNumber(123456)).toEqual(false);
    });

    it("won't work with more than seven and less than 10 digits", function () {
      expect(Pattern.isValidPhoneNumber('312567123')).toEqual(false);
    });

    it("won't work with more than ten digits", function () {
      expect(Pattern.isValidPhoneNumber('31280287941')).toEqual(false);
    });

    it("won't work with letters", function () {
      expect(Pattern.isValidPhoneNumber('312A4893123')).toEqual(false);
    });

    it("won't work with special characters", function() {
      expect(Pattern.isValidPhoneNumber('312*532*1234')).toEqual(false);
    });

    it("won't work with unicode characters", function () {
      expect(Pattern.isValidPhoneNumber('312î802312')).toEqual(false);
    });
  });

  describe('True URL tests', function () {
    it("works for simple url", function () {
      expect(Pattern.isValidURL('google.com')).toEqual(true);
    });

    it("works with www.", function () {
      expect(Pattern.isValidURL('www.google.com')).toEqual(true);
    });

    it("works with http://", function () {
      expect(Pattern.isValidURL('http://google.com')).toEqual(true);
    });

    it("works with https://", function () {
      expect(Pattern.isValidURL('https://google.com')).toEqual(true);
    });

    it("works with .co.uk", function () {
      expect(Pattern.isValidURL('https://google.co.uk')).toEqual(true);
    });

    it("works with long TLDs", function () {
      expect(Pattern.isValidURL('https://museum.museum')).toEqual(true);
    });

    it("works with file paths", function () {
      expect(Pattern.isValidURL('http://google.com/test')).toEqual(true);
    });

    it("works with underscores", function () {
      expect(Pattern.isValidURL('http://google.com/test_underscores')).toEqual(true);
    });

  });


});

