import type { NextPage } from 'next';
import React, { useState } from 'react';
import Dropzone from 'react-dropzone';

const Artlens: NextPage = () => {
  const [imageUploaded, setImageUploaded] = useState<string>('');
  const [currentAccession, setCurrentAccession] = useState<number>(0);
  const [accessionNumsData, setAccessionNums] = useState<string[]>([]);
  const [matchImage, setMatchImage] = useState<string>('');

  const onDrop = (acceptedFiles: any) => {
    const file = acceptedFiles[0];
    console.log(file);

    const reader = new FileReader();

    reader.onabort = () => console.log('file aborted');
    reader.onerror = () => console.log('file reading failed');

    reader.onload = () => {
      const formData = new FormData();
      formData.append('file', file);
      fetch('https://shareyourview.clevelandart.org/syv', {
        method: 'POST',
        body: formData,
      })
        .then((response) => response.json())
        .then((result) => {
          console.log('Success:', result);
          const { accessionNums, imagePathProcessed } = result;
          console.log('accessionNums:', accessionNums);
          console.log('imagePathProcessed:', imagePathProcessed);
          setImageUploaded(imagePathProcessed);
          setAccessionNums(accessionNums);

          fetch(
            `https://openaccess-api.clevelandart.org/api/artworks/${accessionNums[0]}`
          )
            .then((response) => response.json())
            .then((result) => {
              console.log('Success:', result.data.images.web.url);
              setMatchImage(result.data.images.web.url);
            })
            .catch((error) => {
              console.error('Error:', error);
            });
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    };

    reader.readAsBinaryString(file);
  };

  const handleShuffleClick = () => {
    let newAccessionIndex = 0;
    if (currentAccession !== accessionNumsData.length - 1) {
      newAccessionIndex = currentAccession + 1;
    }

    setCurrentAccession(newAccessionIndex);

    fetch(
      `https://openaccess-api.clevelandart.org/api/artworks/${accessionNumsData[newAccessionIndex]}`
    )
      .then((response) => response.json())
      .then((result) => {
        console.log('Success:', result.data.images.web.url);
        setMatchImage(result.data.images.web.url);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  if (matchImage && imageUploaded) {
    return (
      <div>
        <div style={{ display: 'flex' }}>
          <img
            src={`https://shareyourview.clevelandart.org/${imageUploaded}`}
          />
          <img src={matchImage} />
        </div>
        <button onClick={handleShuffleClick}>Shuffle</button>
      </div>
    );
  }
  return (
    <div>
      <h2>Your view</h2>
      <Dropzone
        accept={{
          'image/*': ['.png', '.gif', '.jpeg', '.jpg'],
        }}
        onDrop={onDrop}
      >
        {({ getRootProps, getInputProps }) => (
          <section>
            <div {...getRootProps()}>
              <input {...getInputProps()} />
              <p>Drop an image here or click to upload</p>
            </div>
          </section>
        )}
      </Dropzone>
    </div>
  );
};

export default Artlens;
