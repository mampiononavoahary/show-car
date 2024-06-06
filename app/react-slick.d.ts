declare module 'react-slick' {
    import * as React from 'react';
  
    interface Settings {
      dots?: boolean;
      infinite?: boolean;
      speed?: number;
      slidesToShow?: number;
      slidesToScroll?: number;
      autoplay?: boolean;
      arrows?: boolean;
      autoplaySpeed?: number;
      cssEase?: string;
      fade?: boolean;
      pauseOnHover?: boolean;
      responsive?: Array<{
        breakpoint: number;
        settings: Partial<Settings>;
      }>;
      [key: string]: any;
    }
  
    class Slider extends React.Component<Settings> {}
  
    export default Slider;
  }
  