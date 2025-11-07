'use client';

import { useEffect } from 'react';

declare global {
  interface Window {
    chatbase: any;
  }
}

export default function ChatbaseScript() {
  useEffect(() => {
    console.log('ChatbaseScript component mounted');
    // Initialize chatbase script
    (function() {
      if (!window.chatbase || window.chatbase("getState") !== "initialized") {
        window.chatbase = (...args: any[]) => {
          if (!window.chatbase.q) {
            window.chatbase.q = [];
          }
          window.chatbase.q.push(args);
        };
        
        window.chatbase = new Proxy(window.chatbase, {
          get(target, prop) {
            if (prop === "q") {
              return target.q;
            }
            return (...args: any[]) => target(prop, ...args);
          },
        });
      }

      const onLoad = function() {
        const script = document.createElement("script");
        script.src = "https://www.chatbase.co/embed.min.js";
        script.id = "f6m-w52hualk1QEVdae0B";
        // Using type assertion to handle custom domain property
        (script as any).domain = "www.chatbase.co";
        document.body.appendChild(script);
      };

      if (document.readyState === "complete") {
        onLoad();
      } else {
        window.addEventListener("load", onLoad);
      }
    })();

    // Function to identify user (you'll need to implement getUserToken)
    const identifyUser = async () => {
      try {
        // Replace this with your actual token fetching logic
        const token = await getUserToken();
        if (token && window.chatbase) {
          window.chatbase('identify', { token });
        }
      } catch (error) {
        console.error('Error identifying user with Chatbase:', error);
      }
    };

    // Call identifyUser when component mounts
    console.log('Calling identifyUser');
    identifyUser().catch(error => {
      console.error('Error in identifyUser:', error);
    });

    // Cleanup function
    return () => {
      const chatbaseScript = document.getElementById('f6m-w52hualk1QEVdae0B');
      if (chatbaseScript) {
        chatbaseScript.remove();
      }
    };
  }, []);

  return null;
}

// Mock function - replace with your actual token fetching logic
async function getUserToken() {
  console.log('getUserToken called');
  // For now, we'll use the secret key directly for testing
  // In production, implement proper token generation from your backend
  const secret = process.env.NEXT_PUBLIC_CHATBASE_SECRET;
  if (!secret) {
    console.error('Chatbase secret key is not set');
    return null;
  }
  
  // This is a temporary mock token for testing
  // In production, generate a proper JWT token with user information
  const mockToken = 'test-token';
  console.log('Generated mock token:', mockToken);
  return mockToken;
}
