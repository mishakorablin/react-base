import { useGreeting } from '~/hooks/useGreeting';

/**
 * Tests for useGreeting hook.
 */

describe('useGreeting', () => {
  let mockRandom: jest.SpyInstance;

  beforeEach(() => {
    mockRandom = jest.spyOn(global.Math, 'random');
  });

  afterEach(() => {
    mockRandom.mockReset();
  });

  it('should return Hi there, when random number is more than 0.5', () => {
    mockRandom.mockReturnValue(0.75);
    const result = useGreeting();

    expect(result).toEqual('Hi there');
  });

  it('should return Hello, when random number is less than 0.5', () => {
    mockRandom.mockReturnValue(0.25);
    const result = useGreeting();

    expect(result).toEqual('Hello');
  });
});
