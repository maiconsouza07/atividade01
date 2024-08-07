const fs = require('fs');
const readline = require('readline');

const CHUNK_SIZE = 4 * 1024; // 4KB

// Cria uma stream de leitura
const readStream = fs.createReadStream('lorem.txt', { highWaterMark: CHUNK_SIZE });

// Função para contar palavras
const countWords = (text) => {
    return text.split(/\s+/).filter(word => word.length > 0).length;
};

// Eventos de leitura da stream
readStream.on('data', (chunk) => {
    const chunkText = chunk.toString();
    const wordCount = countWords(chunkText);
    console.log(`Chunk Word Count: ${wordCount}`);
});

readStream.on('end', () => {
    console.log('Finished reading file.');
});

readStream.on('error', (err) => {
    console.error('An error occurred:', err);
});
