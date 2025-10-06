import { WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Server } from 'socket.io';

@WebSocketGateway({
  cors: { origin: '*' },
})
export class UserGateway {
  @WebSocketServer()
  server: Server;

  userCreated(user: any) {
    this.server.emit('userCreated', user);
  }
}
