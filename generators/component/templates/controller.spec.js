import { expect } from 'chai';
import sinon from 'sinon';
import <%= fileNamePascal %>Controller from './<%= fileName %>.controller.js';
let ctrl;

function initMocksAndDeps() {
  const mocks = [];

  ctrl = new <%= fileNamePascal %>Controller(...mocks);
}


describe('<%= fileNameCamel %>Controller{}', () => {
  beforeEach(() => { ctrl.initMocksAndDeps(); });

  describe('initialisation', () => {
    it('should be properly initialized ($onInit)');
  });

  describe('methods', () => {
    beforeEach(() => { ctrl.$onInit(); });

    it('they should be tested');
  });
});
