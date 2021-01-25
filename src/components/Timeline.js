import React from 'react';
import {
  Timeline,
  Events,
  UrlButton,
  ImageEvent,
  TextEvent,
  YouTubeEvent,
} from '@merc/react-timeline';
import {
  ScrollingProvider,
  useScrollSection,
  Section,
} from 'react-scroll-section'




const TimeLine = () => {
  return (
    <Timeline>
      <Events>
        <TextEvent date="1/1/19" text="**Markdown** is *supported*" />
        <ImageEvent
         
          src="https://res.cloudinary.com/dovoq8jou/image/upload/v1564772194/jellyfish.jpg"
          alt="jellyfish swimming"
          credit="Photo by [@tavi004](https://unsplash.com/@tavi004)"
        >
          <div>
            <UrlButton href="https://unsplash.com/search/photos/undersea">
              View more undersea photos
            </UrlButton>
          </div>
        </ImageEvent>
        <ImageEvent
          text="React"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1024px-React-icon.svg.png"
          alt="React">
        </ImageEvent>
      </Events>
    </Timeline>
  );
}

export default TimeLine;