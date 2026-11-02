import { HeroSection } from '@/components/dashboard/HeroSection'
import { OverviewMetrics } from '@/components/dashboard/OverviewMetrics'
import { FeaturedProjects } from '@/components/dashboard/FeaturedProjects'
import { EngineeringFocus } from '@/components/dashboard/EngineeringFocus'
import { ActivityTimeline } from '@/components/dashboard/ActivityTimeline'
import { CloudTwinBanner } from '@/components/dashboard/CloudTwinBanner'

export function CommandCentrePage() {
  return (
    <div className="command-centre">
      <HeroSection />
      <OverviewMetrics />
      <FeaturedProjects />
      <EngineeringFocus />
      <ActivityTimeline />
      <CloudTwinBanner />
    </div>
  )
}
