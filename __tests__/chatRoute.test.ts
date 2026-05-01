import { POST } from '../app/api/chat/route';
import { streamText } from 'ai';

// Mock the dependencies
jest.mock('ai', () => ({
  streamText: jest.fn(),
}));

jest.mock('@ai-sdk/google', () => ({
  google: jest.fn(),
}));

describe('Chat API Route', () => {
  it('should return a stream response on valid POST request', async () => {
    // Setup mock return value for streamText
    const mockToDataStreamResponse = jest.fn().mockReturnValue({});
    (streamText as jest.Mock).mockResolvedValue({
      toDataStreamResponse: mockToDataStreamResponse,
    });

    const mockRequest = {
      json: jest.fn().mockResolvedValue({ messages: [] }),
    } as any;

    const response = await POST(mockRequest);
    
    expect(response).toBeDefined();
    expect(streamText).toHaveBeenCalled();
    expect(mockToDataStreamResponse).toHaveBeenCalled();
  });
});
