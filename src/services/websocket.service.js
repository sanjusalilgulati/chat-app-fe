class WebSocketService {
    constructor() {
        this.socket = null;
    }

    //connect to using web socket URL make a connection
    connect() {
        this.socket = new WebSocket('ws://localhost:4001');
        this.socket.onopen = () => console.log("Websocket COnnected");
        this.socket.onclose = () => console.log("Websocket disconnected");
    }

    //Disconnect 
    disconnect() {
        if (this.socket) {
          this.socket.close();
        }
    }

    sendMessage(msg) {
        if (this.socket) {
          this.socket.send(JSON.stringify(msg));
        }
      }
    
    onMessage(callback) {
        if (this.socket) {
          this.socket.onmessage = (event) => {
            const msg = event;
            callback(msg);
          };
        }
      }
    }
    
    export default new WebSocketService();