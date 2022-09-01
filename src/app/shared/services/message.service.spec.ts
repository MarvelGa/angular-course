import {MessageService} from "./message.service";

describe('(MessageService)', () => {

  it('should change message', () => {
    const messageService = new MessageService();
    const message = 'transferring message';
    messageService.changeMessage(message);
    expect(messageService.changeMessage(message)).withContext(message);
  });
});
