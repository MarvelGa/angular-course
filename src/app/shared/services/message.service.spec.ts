import {MessageService} from "./message.service";

describe('(MessageService)', () => {

  it('should invoke the "message" function', () => {
    const messageService = new MessageService();
    spyOn(messageService, "changeMessage");
    const message = 'transferring message';
    messageService.changeMessage(message);
    expect(messageService.changeMessage).toHaveBeenCalled()
  });

  it('should transfer the "message"', () => {
    const messageService = new MessageService();
    const message = 'transferring message';
    messageService.changeMessage(message);
    expect(messageService.currentMessage).withContext(message)
  });
});
