import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import VideoFiftyFifty from './VideoFiftyFifty';

test('should render Video Fifty Fifty component', () => {
  expect(() => {
    render(
      <VideoFiftyFifty
        title="Video Title"
        tag="Optional"
        body="Bacon ipsum dolor amet ribeye shank chicken buffalo andouille rump turkey shoulder kielbasa strip steak tenderloin flank."
        cta="CTA"
        imgSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Three_guinea_pigs_%28Cavia_porcellus%29_at_Keswick_Public_Library.jpg/2560px-Three_guinea_pigs_%28Cavia_porcellus%29_at_Keswick_Public_Library.jpg"
        videoUrl="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
        imgAlt="img"
      />
    );
  }).not.toThrow();
});
