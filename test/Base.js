import { expect } from 'chai';
import { Base } from '../Base';

describe('Base', function () {
  before(function () {
    this.instance = new Base();
  });

  it('is not free', function () {
    expect(this.instance._free).to.equal(false);
  });

  describe('#free', function () {
    before(function () {
      this.instance.free();
    });

    it('sets instance free', function () {
      expect(this.instance._free).to.equal(true);
    });
  });
});
