interface Images {
  url: string;
  filename: string;
  filesize: string;
  width: string;
  height: string;
}

export interface ImagesResponse {
  web: Images;
  print: Images;
  full: Images;
}
