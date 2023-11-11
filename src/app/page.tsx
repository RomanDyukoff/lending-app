import { AboutSection } from '@/components/organisms/AboutSection/AboutSection';
import { ContactsSection } from '@/components/organisms/ContactsSection/ContactsSection';
import { WelcomeSection } from '@/components/organisms/WelcomeSection/WelcomeSection';
import { WorkSection } from '@/components/organisms/WorkSection/WorkSection';
import '@/styles/globals.scss';

export default function Home() {
  return (
    <>
      <WelcomeSection />
      <AboutSection />
      <WorkSection />
      <ContactsSection />
    </>
  )
}
