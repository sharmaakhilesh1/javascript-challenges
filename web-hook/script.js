class ApiBuffer {
  constructor() {
    this.requestQueue = [];
    this.isOnline = navigator.onLine;

    // Listen for online and offline events
    window.addEventListener("online", this.handleOnline.bind(this));
    window.addEventListener("offline", this.handleOffline.bind(this));

    // Attempt to send buffered requests if online on initialization
    if (this.isOnline) {
      this.processQueue();
    }
  }

  // Method to handle online event
  handleOnline() {
    this.isOnline = true;
    this.processQueue();
  }

  // Method to handle offline event
  handleOffline() {
    this.isOnline = false;
  }

  // Method to buffer requests
  bufferRequest(request) {
    if (this.isOnline) {
      this.sendRequest(request);
    } else {
      this.requestQueue.push(request);
    }
  }

  // Method to send the request
  async sendRequest(request) {
    try {
      const response = await fetch(request.url, {
        method: request.method,
        headers: request.headers,
        body: request.body,
      });
      const data = await response.json();
      console.log("Request successful:", data);
    } catch (error) {
      console.error("Request failed:", error);
      // Optionally re-buffer the request if it fails
      if (this.isOnline === false) {
        this.bufferRequest(request);
      }
    }
  }

  // Method to process the queue of buffered requests
  async processQueue() {
    while (this.requestQueue.length > 0) {
      const request = this.requestQueue.shift();
      await this.sendRequest(request);
    }
  }
}

// Example usage
const apiBuffer = new ApiBuffer();
let btnHitCount = 0;

// Function to create a request object
function createRequest(
  url,
  method = "GET",
  headers = { Accept: "application/json" },
  body = null
) {
  return { url, method, headers, body };
}

function handleClick() {
  ++btnHitCount;
  document.getElementById("hit-count").innerHTML = btnHitCount;
  // Buffering a GET request
  apiBuffer.bufferRequest(
    createRequest("https://webhook.site/6553b826-b49b-47ae-9b6a-c924a0c506af")
  );
}
//State variable to maintain Btn hit count

const btnHitMe = document.getElementById("btn-hitme");
btnHitMe.addEventListener("click", handleClick);

// Buffering a POST request
// apiBuffer.bufferRequest(
//   createRequest(
//     "https://api.example.com/submit",
//     "POST",
//     { "Content-Type": "application/json" },
//     JSON.stringify({ key: "value" })
//   )
// );
