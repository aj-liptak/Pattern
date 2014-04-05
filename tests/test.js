describe('Email Tests', function() {


  describe('Test that return true', function () {
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

  describe('Tests that return false', function () {
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


});

