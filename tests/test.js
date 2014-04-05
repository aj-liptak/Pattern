describe('Email Tests', function() {

  it('works for pattern', function() {
    expect(Pattern.isValidEmail("email@test.com")).toEqual(true);
  });

  it('works for this strange pattern', function() {
    expect(Pattern.isValidEmail('very.(),:;<>[]\".VERY.\"very@\\ \"very\".unusual"@strange.example.com'));
  });
  it("doesn't work when there is no @ sign", function() {
    expect(Pattern.isValidEmail("test.com")).toEqual(false);
  });

  it("doesn't work when there is no @ sign", function() {
    expect(Pattern.isValidEmail("test.com")).toEqual(false);
  });

});

