import { useEffect } from "react";
import { HomePageContainer } from "./home-page-style.js";

function loadExternalScript(src, attrs = {}) {
  return new Promise((resolve, reject) => {
    // Avoid inserting the same script twice
    const existing = document.querySelector(`script[src="${src}"]`);
    if (existing) {
      if (existing.hasAttribute('data-loaded')) return resolve(existing);
      existing.addEventListener('load', () => resolve(existing));
      existing.addEventListener('error', () => reject(new Error('Failed to load ' + src)));
      return;
    }

    const s = document.createElement('script');
    s.src = src;
    s.defer = true;
    Object.keys(attrs).forEach((k) => s.setAttribute(k, attrs[k]));
    s.addEventListener('load', () => {
      s.setAttribute('data-loaded', 'true');
      resolve(s);
    });
    s.addEventListener('error', () => reject(new Error('Failed to load ' + src)));
    document.body.appendChild(s);
  });
}

function HomePageComponent() {
  useEffect(() => {
    const chatbotId = "CzaBjykPRVJvEXPYvmXtv";
    const domain = "www.chatbase.co";

    // Expose config expected by the widget before loading its script
    window.embeddedChatbotConfig = { chatbotId, domain };

    let mounted = true;

    loadExternalScript('https://www.chatbase.co/embed.min.js', { chatbotId, domain })
      .then(() => {
        if (!mounted) return;
        console.log('Chatbase embed script loaded');
      })
      .catch((err) => {
        console.error('Failed to load Chatbase embed script:', err);
      });

    return () => {
      mounted = false;
      // Remove the script we added (only if present)
      const s = document.querySelector('script[src="https://www.chatbase.co/embed.min.js"]');
      if (s && s.getAttribute('data-loaded') === 'true') {
        s.remove();
      }
      try {
        delete window.embeddedChatbotConfig;
      } catch (e) {}
    };
  }, []);

  return (
    <HomePageContainer>
      <h1>Home Page</h1>
      <p>If the chatbot is configured correctly, the widget should appear shortly.</p>
      {/* Placeholder element in case the embed looks for a specific container */}
      <div id="chatbase-embed-placeholder" style={{ minHeight: 200 }} />
    </HomePageContainer>
  );
}

export default HomePageComponent;