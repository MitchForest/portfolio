import { put } from '@vercel/blob';
import fs from 'fs/promises';
import path from 'path';

// Load environment variables
import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

const videosDir = './public/videos';
const imagesDir = './public/images';

async function uploadFile(filePath, fileName) {
  try {
    const file = await fs.readFile(filePath);
    const blob = await put(fileName, file, {
      access: 'public',
      token: process.env.BLOB_READ_WRITE_TOKEN,
    });
    console.log(`✅ Uploaded ${fileName}: ${blob.url}`);
    return blob.url;
  } catch (error) {
    console.error(`❌ Failed to upload ${fileName}:`, error);
    return null;
  }
}

async function uploadAllMedia() {
  console.log('🚀 Starting media upload to Vercel Blob...\n');
  
  const uploads = {
    videos: {},
    images: {}
  };

  // Upload videos
  const videoFiles = [
    'FotoFun.mp4',
    'NoteChat.MOV',
    'Snapbet.MOV',
    'Dayli.MOV',
    'SassyCRM.MOV'
  ];

  console.log('📹 Uploading videos...');
  for (const videoFile of videoFiles) {
    const filePath = path.join(videosDir, videoFile);
    const url = await uploadFile(filePath, `videos/${videoFile}`);
    if (url) {
      uploads.videos[videoFile] = url;
    }
  }

  // Upload Catan image
  console.log('\n🖼️ Uploading images...');
  const catanPath = path.join(imagesDir, 'Catan.jpeg');
  const catanUrl = await uploadFile(catanPath, 'images/Catan.jpeg');
  if (catanUrl) {
    uploads.images['Catan.jpeg'] = catanUrl;
  }

  // Save URLs to a file for reference
  console.log('\n💾 Saving URLs...');
  await fs.writeFile(
    './scripts/blob-urls.json',
    JSON.stringify(uploads, null, 2)
  );

  console.log('\n✨ Upload complete! URLs saved to scripts/blob-urls.json');
  console.log('\nURLs:', JSON.stringify(uploads, null, 2));
}

uploadAllMedia().catch(console.error);