import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { AppLayout } from '@/layouts/AppLayout'
import { AboutPage } from '@/pages/AboutPage'
import { AchievementsPage } from '@/pages/AchievementsPage'
import { CloudTwinPage } from '@/pages/CloudTwinPage'
import { CommandCentrePage } from '@/pages/CommandCentrePage'
import { ContactPage } from '@/pages/ContactPage'
import { ProjectVaultPage } from '@/pages/ProjectVaultPage'
import { SkillsPage } from '@/pages/SkillsPage'

function App() {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  )
}

export default App
