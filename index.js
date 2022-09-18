addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request));
});

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}

const resultMap = {
  0: 'https://example.com/us',
  1: 'https://eu.example.com/',
  2: 'https://namer.example.com/us',  
  3: 'https://apac.example.com/us'
};

async function handleRequest(request) {
  let number = getRandomInt(0,4);
  if (number != null && number in resultMap) {
    const url = resultMap[number];
    return new Response(url);
  } else {
    return fetch(request);
  }
}