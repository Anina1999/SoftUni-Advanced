import { assert } from 'chai';
import { weddingDay } from '../weddingDay.js';

describe('pickValue', () => {
  it('invalid capacity', () => {
    assert.throws(() => weddingDay.pickVenue('1', 1, 'Varna'));
    assert.throws(() => weddingDay.pickVenue(undefined, 1, 'Varna'));
  });

  it('invalid price', () => {
    assert.throws(() => weddingDay.pickVenue(10, '10', 'Varna'));
    assert.throws(() => weddingDay.pickVenue(10, [], 'Varna'));
  });

  it('invalid location', () => {
    assert.throws(() => weddingDay.pickVenue(10, 10, 'Kaspichan'), 'The location of this venue is not in the correct area!');
    assert.throws(() => weddingDay.pickVenue(10, 20, 'Shumen'), 'The location of this venue is not in the correct area!');
    assert.throws(() => weddingDay.pickVenue(50, 50, 10));
  });

  it('invalid condition capacity', () => {
    const res = 'This venue does not meet your requirements!';
    assert.equal(weddingDay.pickVenue(149, 130, 'Varna'), res);
  });

  it('invalid condition price', () => {
    const res = 'This venue does not meet your requirements!';
    assert.equal(weddingDay.pickVenue(150, 121, 'Varna'), res);
  });

  it('valid data', () => {
    let res = 'This venue meets the requirements, with capacity of 150 guests and 120$ cover.';
    assert.equal(weddingDay.pickVenue(150, 120, 'Varna'), res);
    res = 'This venue meets the requirements, with capacity of 155 guests and 119$ cover.';
    assert.equal(weddingDay.pickVenue(155, 119, 'Varna'), res);
  });

  describe('otherSpendings', () => {
    it('invalid weddingDecoration', () => {
      assert.throws(() => weddingDay.otherSpendings('1', [1], true));
      assert.throws(() => weddingDay.otherSpendings(50, [1], false));
    });

    it('invalid photography', () => {
      assert.throws(() => weddingDay.otherSpendings([], '1', true));
      assert.throws(() => weddingDay.otherSpendings([], 5, true));
    });

    it('invalid discount', () => {
      assert.throws(() => weddingDay.otherSpendings([], [], 'Pesho'));
      assert.throws(() => weddingDay.otherSpendings([], [], [true]));
    });

    it('invalid data', () => {
      const res = 'You spend 1300$ for wedding decoration and photography!';
      assert.equal(weddingDay.otherSpendings(['pesho'], ['video'], false), res);
    });

    it('calculate price without discount', () => {
      const res1 = 'You spend 1200$ for wedding decoration and photography!';
      const res2 = 'You spend 1800$ for wedding decoration and photography!';
      const res3 = 'You spend 1700$ for wedding decoration and photography!';

      assert.equal(weddingDay.otherSpendings(['flowers'], ['pictures'], false), res1);
      assert.equal(weddingDay.otherSpendings(['flowers'], ['video'], false), res2);
      assert.equal(weddingDay.otherSpendings(['Fabric drapes and curtains'], ['video'], false), res3);
    });

    it('calculation price with discount', () => {
      const res1 = 'You spend 1020$ for wedding decoration and photography with 15% discount!';
      const res2 = 'You spend 1530$ for wedding decoration and photography with 15% discount!';

      assert.equal(weddingDay.otherSpendings(['flowers'], ['pictures'], true), res1);
      assert.equal(weddingDay.otherSpendings(['flowers'], ['video'], true), res2);
    });
  });
});

describe('tableDistribution', () => {
  it('test with invalid value', () => {
    assert.throws(() => weddingDay.tableDistribution('1', '5'));
    assert.throws(() => weddingDay.tableDistribution(-1, '5'));
    assert.throws(() => weddingDay.tableDistribution(5, -5));
    assert.throws(() => weddingDay.tableDistribution(-5, -5));
    assert.throws(() => weddingDay.tableDistribution(6, 0));
  });

  it('peopleOnTheTable are less than 6', () => {
    const res1 = 'There is only 5 people on every table, you can join some tables.';
    const res2 = 'There is only 1 people on every table, you can join some tables.';
    assert.equal(weddingDay.tableDistribution(10, 2), res1);
    assert.equal(weddingDay.tableDistribution(1, 2), res2);
  });

  it('peopleOnTheTable more than 6', () => {
    const res1 = 'You have 2 tables with 6 guests on table.';
    const res2 = 'You have 1 tables with 6 guests on table.';
    assert.equal(weddingDay.tableDistribution(12, 2), res1);
    assert.equal(weddingDay.tableDistribution(6, 1), res2);
  });
});