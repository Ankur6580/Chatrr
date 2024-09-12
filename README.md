# Chatrr - Real-Time Chat Application

**Chatrr** is a simple real-time chat application built using **Node.js**, **Express**, and **Socket.io**. It allows users to send and receive messages instantly with real-time updates.

## Features

- Real-time messaging
- Smooth user interface
- Instant updates without page refresh
- Simple and intuitive design

## Technologies Used

- **Node.js** - For building the server
- **Express.js** - For handling server-side routing
- **Socket.io** - For real-time communication between server and clients
- **HTML/CSS/JavaScript** - For the front-end interface

## Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v12.x or higher)
- [npm](https://www.npmjs.com/)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Ankur6580/chatrr.git
   ```

2. Navigate to the project directory:

   ```bash
   cd chatrr
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Start the server:

   ```bash
   node server.js
   ```

5. Open your browser and go to:

   ```
   http://localhost:3000
   ```

## Usage

Once the server is running, you can open multiple tabs or windows of the application. Users in different tabs will be able to chat with each other in real-time.

## Project Structure
```
chatrr
├── index.html      # Frontend HTML
├── style.css       # Basic styles
├── server.js       # Node.js server with Socket.io integration
├── App.js          # Handles keypress, sending/receiving messages, adding messages
├── package.json    # Project dependencies
└── README.md       # Project documentation
```

## Future Improvements

- User authentication/authorization and private chats
- Message history and storage
- Improved UI/UX
- Emoji and sticker support to enhance chat experience
- Media file uploads (images, videos, documents) for richer conversations
- Typing indicators to show when someone is typing
- Online/Offline status for users
- Group chats for multiple participants