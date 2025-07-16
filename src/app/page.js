import Home from '@/src/app/home/page'
import SocialProofPopup from '../components/SocialProofPopup';

export const metadata = {
  title: "Home - Euildint Construction Building NextJS Template"
}

const HomePage = () => {
  return (
    <>
      <Home />
      <SocialProofPopup/>
    </>
  );
}

export default HomePage