import * as filters from 'redux/types';

import { getListStatus, getAllCompleted, getItemsLeftLabel, getFilterFromPath } from '../index';

const todo = {
  id: 1,
  completed: false,
  text: 'Todo',
};

describe('Helpers:', () => {
  describe('getListStatus():', () => {
    it('should return false when errors|undefined', () => {
      expect(getListStatus()).toBe(false);
    });

    it('should return the todo list with status correctly with 1 completed todo', () => {
      expect(getListStatus([{ completed: false }])).toHaveProperty('notCompletedItems', 1);
    });

    it('should return the todo list with status correctly with 1 not completed todo', () => {
      expect(getListStatus([{ completed: true }])).toHaveProperty('completedItems', 1);
    });

    it('should return the todo list with status correctly with severeal todos with different status', () => {
      expect(
        getListStatus([{ completed: false }, { completed: true }, { completed: false }]),
      ).toMatchObject({ completedItems: 1, notCompletedItems: 2 });
    });
  });

  describe('getAllCompleted():', () => {
    it('should return false when errors|undefined', () => {
      expect(getAllCompleted()).toBe(false);
    });

    it('should return all completed correctly when no items completed', () => {
      expect(getAllCompleted([todo, todo])).toEqual(false);
    });

    it('should return all completed correctly when has some completed', () => {
      expect(getAllCompleted([todo, { ...todo, completed: true }])).toEqual(false);
    });

    it('should return all completed correctly when all completed', () => {
      expect(getAllCompleted([{ ...todo, completed: true }, { ...todo, completed: true }])).toEqual(
        true,
      );
    });
  });

  describe('getItemsLeftLabel():', () => {
    it('should return false when errors|undefined', () => {
      expect(getItemsLeftLabel()).toBe(false);
    });

    it('should return correctly when is it has more than 1 todo', () => {
      expect(
        getItemsLeftLabel([{ completed: false }, { completed: true }, { completed: false }]),
      ).toMatchSnapshot();
    });

    it('should return correctly when is it has just a single todo', () => {
      expect(getItemsLeftLabel([{ completed: false }, { completed: true }])).toMatchSnapshot();
    });

    it('should return correctly when is it has no todos', () => {
      expect(getItemsLeftLabel([{ completed: true }, { completed: true }])).toMatchSnapshot();
    });
  });

  describe('getFilterFromPath():', () => {
    it('should return false when errors|undefined', () => {
      expect(getFilterFromPath()).toBe(false);
    });

    it('should return correctly when it has hash but not match any pattenrs', () => {
      expect(getFilterFromPath('test')).toBe(filters.SHOW_ALL);
    });

    it('should return correctly when show_all', () => {
      expect(getFilterFromPath('#/')).toBe(filters.SHOW_ALL);
    });

    it('should return correctly when show_active', () => {
      expect(getFilterFromPath('#/active')).toBe(filters.SHOW_ACTIVE);
    });

    it('should return correctly when show_completed', () => {
      expect(getFilterFromPath('#/completed')).toBe(filters.SHOW_COMPLETED);
    });
  });
});
