type IBranchStatus = 'open' | 'closed' | 'soon';

interface IBranch {
  id: string;
  name: string;
  description: string;
  address: string;
  phone: string;
  locationUrl: string;
  cover: string;
  status: IBranchStatus;
}

interface IVideo {
  id: string;
  title: string;
  description: string;
  cover: string;
  url: string;
}

interface IMemberShip {
  id: string;
  imageUrl: string;
  linkUrl: string;
}

interface IProduct {
  id: string;
  title: string;
  price: string;
  imageUrl: string;
  linkUrl: string;
}
