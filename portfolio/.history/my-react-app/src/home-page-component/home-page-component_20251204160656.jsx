import { useEffect } from "react";

export default function HomePageComponent() {
  useEffect(() => {
    // Script 1: Config
    const script1 = document.createElement("script");
    script1.innerHTML = `
      window.embeddedChatbotConfig = {
        chatbotId: "YOUR_CHATBASE_ID",
        domain: "www.chatbase.co"
      };
    `;

    // Script 2: Main Chatbase Script
    const script2 = document.createElement("script");
    script2.src = "https://www.chatbase.co/embed.min.js";
    script2.setAttribute("chatbotId", "YOUR_CHATBASE_ID");
    script2.setAttribute("domain", "www.chatbase.co");
    script2.defer = true;

    // Add to body
    document.body.appendChild(script1);
    document.body.appendChild(script2);

    // Cleanup when component unmounts
    return () => {
      script1.remove();
      script2.remove();
    };
  }, []);

  return (
    <div>
      <h1>Home Page</h1>
      {/* Chatbase widget loads automatically */}
    </div>
  );
}
