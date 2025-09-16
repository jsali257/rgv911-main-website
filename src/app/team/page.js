import TeamPage from '@/components/TeamPage';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

export const metadata = {
  title: 'Meet Our Team | RGV 9-1-1',
  description: 'Meet the dedicated professionals behind RGV 9-1-1 working to ensure the safety of our community.',
};

export default function Team() {
  return (
    <>
      <Navbar />
      <TeamPage />
      <Footer />
    </>
  );
}
