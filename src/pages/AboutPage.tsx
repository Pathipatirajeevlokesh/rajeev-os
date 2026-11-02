import { ProfileHero } from '@/components/about/ProfileHero'
import { ProfessionalBackground } from '@/components/about/ProfessionalBackground'
import { EngineeringJourney } from '@/components/about/EngineeringJourney'
import { EngineeringPrinciples } from '@/components/about/EngineeringPrinciples'

export function AboutPage() {
  return (
    <div className="page-stack about-page">
      <ProfileHero />
      <ProfessionalBackground />
      <EngineeringJourney />
      <EngineeringPrinciples />
    </div>
  )
}
