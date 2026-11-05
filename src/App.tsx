import { lazy, Suspense } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { AppLayout } from '@/layouts/AppLayout'
import { Panel } from '@/components/ui/Panel'

const AboutPage = lazy(() => import('@/pages/AboutPage').then((module) => ({ default: module.AboutPage })))
const AchievementsPage = lazy(() => import('@/pages/AchievementsPage').then((module) => ({ default: module.AchievementsPage })))
const CloudTwinPage = lazy(() => import('@/pages/CloudTwinPage').then((module) => ({ default: module.CloudTwinPage })))
const CommandCentrePage = lazy(() => import('@/pages/CommandCentrePage').then((module) => ({ default: module.CommandCentrePage })))
const ContactPage = lazy(() => import('@/pages/ContactPage').then((module) => ({ default: module.ContactPage })))
const ProjectVaultPage = lazy(() => import('@/pages/ProjectVaultPage').then((module) => ({ default: module.ProjectVaultPage })))
const SkillsPage = lazy(() => import('@/pages/SkillsPage').then((module) => ({ default: module.SkillsPage })))

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div className="route-loading"><Panel label="RAJEEV.OS" title="Loading workspace…"><span>Preparing the next system surface.</span></Panel></div>}>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<CommandCentrePage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="skills" element={<SkillsPage />} />
            <Route path="projects" element={<ProjectVaultPage />} />
            <Route path="projects/:projectId" element={<ProjectVaultPage />} />
            <Route path="cloud-twin" element={<CloudTwinPage />} />
            <Route path="achievements" element={<AchievementsPage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
