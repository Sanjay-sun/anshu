// script.js
function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
}

// Optional: Floating hearts animation
const heartBg = document.querySelector('.heart-bg');
let hearts = [];

function createHeart() {
  const heart = document.createElement('div');
  heart.className = 'heart';
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.animationDuration = 2 + Math.random() * 3 + 's';
  heartBg.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 5000);
}

setInterval(createHeart, 500);

// Add styles dynamically
const style = document.createElement('style');
style.innerHTML = `
  .heart {
    position: fixed;
    top: -20px;
    width: 20px;
    height: 20px;
    background: url('https://i.ibb.co/Hp5J8Gq/heart-icon.png') no-repeat center center;
    background-size: contain;
    animation: floatHeart linear forwards;
    z-index: 0;
  }

  @keyframes floatHeart {
    0% {
      transform: translateY(0) scale(1);
      opacity: 1;
    }
    100% {
      transform: translateY(100vh) scale(0.5);
      opacity: 0;
    }
  }

  .enter-story-container {
    text-align: center;
    margin-top: 50px;
  }

  .enter-story-btn {
    display: inline-block;
    padding: 15px 30px;
    background: linear-gradient(to right, #ff69b4, #ffb6c1);
    color: white;
    font-size: 1.5rem;
    font-weight: bold;
    text-decoration: none;
    border-radius: 50px;
    box-shadow: 0 0 15px rgba(255, 105, 180, 0.6);
    animation: pulse-glow 2s infinite;
    transition: transform 0.2s;
  }

  .enter-story-btn:hover {
    transform: scale(1.05);
  }

  @keyframes pulse-glow {
    0% {
      box-shadow: 0 0 15px rgba(255, 105, 180, 0.6);
    }
    50% {
      box-shadow: 0 0 30px rgba(255, 105, 180, 1);
    }
    100% {
      box-shadow: 0 0 15px rgba(255, 105, 180, 0.6);
    }
  }

  .zayn-quote {
    margin: 40px auto;
    text-align: center;
    font-size: 1.8rem;
    font-style: italic;
    color: #ff69b4;
    max-width: 80%;
    animation: fadeInQuote 2s ease-in-out;
  }

  @keyframes fadeInQuote {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }

  .zayn-video {
    display: block;
    margin: 30px auto;
    max-width: 90%;
    border-radius: 12px;
    box-shadow: 0 0 20px rgba(255, 105, 180, 0.3);
  }
`;
document.head.appendChild(style);

// Insert the button on index.html
if (document.body && window.location.pathname.endsWith('index.html')) {
  const container = document.createElement('div');
container.className = 'enter-story-container';

// Story button
const storyBtn = document.createElement('a');
storyBtn.href = 'about.html';
storyBtn.className = 'enter-story-btn';
storyBtn.innerText = 'Enter Our Story 💖';
container.appendChild(storyBtn);

// Gallery button
const galleryBtn = document.createElement('a');
galleryBtn.href = 'gallery.html';
galleryBtn.className = 'enter-story-btn';
galleryBtn.innerText = 'Zayn Moments 📸';
galleryBtn.style.marginTop = '20px';
container.appendChild(document.createElement('br'));
container.appendChild(galleryBtn);

// Secret page button
const secretBtn = document.createElement('a');
secretBtn.href = 'for-Anshu.html';
secretBtn.className = 'enter-story-btn';
secretBtn.innerText = 'For Anshu Only 🔐';
secretBtn.style.marginTop = '20px';
container.appendChild(document.createElement('br'));
container.appendChild(secretBtn);

document.body.appendChild(container);
}

// Add Zayn Malik quote, music and video on about.html
if (document.body && window.location.pathname.endsWith('about.html')) {
  const quote = document.createElement('div');
  quote.className = 'zayn-quote';
  quote.innerText = '“Love is not just a feeling, it\'s a whole vibe.” – Zayn Malik';
  document.body.appendChild(quote);

  const audio = document.createElement('audio');
  audio.src = 'music/zayn-vibe.mp3';
  audio.autoplay = true;
  audio.loop = true;
  audio.muted = true;
  audio.controls = true;
  audio.style.display = 'block';
  audio.style.margin = '20px auto';
  document.body.appendChild(audio);

  const video = document.createElement('video');
  video.src = 'videos/zayn-vibe.mp4';
  video.className = 'zayn-video';
  video.controls = true;
  document.body.appendChild(video);
}
// script.js
function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
}

// Optional: Floating hearts animation
const heartBg = document.querySelector('.heart-bg');
let hearts = [];

function createHeart() {
  const heart = document.createElement('div');
  heart.className = 'heart';
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.animationDuration = 2 + Math.random() * 3 + 's';
  heartBg.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 5000);
}

setInterval(createHeart, 500);

// Add styles dynamically
const style = document.createElement('style');
style.innerHTML = `
  .heart {
    position: fixed;
    top: -20px;
    width: 20px;
    height: 20px;
    background: url('https://i.ibb.co/Hp5J8Gq/heart-icon.png') no-repeat center center;
    background-size: contain;
    animation: floatHeart linear forwards;
    z-index: 0;
  }

  @keyframes floatHeart {
    0% {
      transform: translateY(0) scale(1);
      opacity: 1;
    }
    100% {
      transform: translateY(100vh) scale(0.5);
      opacity: 0;
    }
  }

  .enter-story-container {
    text-align: center;
    margin-top: 50px;
  }

  .enter-story-btn,
  .zayn-gallery-btn,
  .secret-btn {
    display: inline-block;
    margin: 10px;
    padding: 15px 30px;
    background: linear-gradient(to right, #ff69b4, #ffb6c1);
    color: white;
    font-size: 1.3rem;
    font-weight: bold;
    text-decoration: none;
    border-radius: 50px;
    box-shadow: 0 0 15px rgba(255, 105, 180, 0.6);
    animation: pulse-glow 2s infinite;
    transition: transform 0.2s;
  }

  .enter-story-btn:hover,
  .zayn-gallery-btn:hover,
  .secret-btn:hover {
    transform: scale(1.05);
  }

  @keyframes pulse-glow {
    0% {
      box-shadow: 0 0 15px rgba(255, 105, 180, 0.6);
    }
    50% {
      box-shadow: 0 0 30px rgba(255, 105, 180, 1);
    }
    100% {
      box-shadow: 0 0 15px rgba(255, 105, 180, 0.6);
    }
  }

  .zayn-quote {
    margin: 40px auto;
    text-align: center;
    font-size: 1.8rem;
    font-style: italic;
    color: #ff69b4;
    max-width: 80%;
    animation: fadeInQuote 2s ease-in-out;
  }

  @keyframes fadeInQuote {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }

  .zayn-video {
    display: block;
    margin: 30px auto;
    max-width: 90%;
    border-radius: 12px;
    box-shadow: 0 0 20px rgba(255, 105, 180, 0.3);
  }

  .zayn-gallery {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
    margin: 20px;
  }

  .zayn-gallery img {
    width: 200px;
    height: 200px;
    object-fit: cover;
    border-radius: 12px;
    box-shadow: 0 0 10px rgba(255, 105, 180, 0.4);
  }
`;
document.head.appendChild(style);
