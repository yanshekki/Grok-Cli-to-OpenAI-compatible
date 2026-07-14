import type { Request, Response } from 'express';
import type { CreateChatCompletionDto } from '../dto/chat.dto';
import { ExceptionFactory } from '../exceptions/exception.factory';
import { chatService } from '../services/chat.service';
import { asyncHandler } from '../utils/async-handler';
import { requestIp } from '../utils/client-ip';

export class ChatController {
  createCompletion = asyncHandler(async (req: Request, res: Response) => {
    if (!req.apiKey) {
      throw ExceptionFactory.unauthorized();
    }

    const dto = req.body as CreateChatCompletionDto;
    const stream = Boolean(dto.stream);

    const result = await chatService.createCompletion(
      dto,
      {
        apiKey: req.apiKey,
        requestId: req.requestId,
        ip: requestIp(req),
        userAgent: req.header('user-agent') ?? undefined,
      },
      stream ? res : undefined,
    );

    if (!stream && result) {
      res.status(200).json(result);
    }
  });
}

export const chatController = new ChatController();
