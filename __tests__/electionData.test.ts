import { electionTimeline } from '../lib/electionData';

describe('Election Data', () => {
  test('should have exactly 7 phases', () => {
    expect(electionTimeline).toHaveLength(7);
  });

  test('each phase should have correct properties', () => {
    electionTimeline.forEach((phase) => {
      expect(phase).toHaveProperty('id');
      expect(phase).toHaveProperty('title');
      expect(phase).toHaveProperty('description');
      expect(phase).toHaveProperty('duration');
    });
  });

  test('ids should be unique and sequential from 1 to 7', () => {
    const ids = electionTimeline.map((p) => p.id);
    expect(ids).toEqual([1, 2, 3, 4, 5, 6, 7]);
  });
});
