describe('Hello World', function() {

  xit('should increment a value by one', function() {
    expect(add(1)).toBe(1);

    function add(value) {
      return value + 1;
    };
  });

  it('should decrement a value by one', function() {
    expect(subtract(1)).toBe(0);

    function subtract(value) {
      return value - 1;
    };
  });

});
