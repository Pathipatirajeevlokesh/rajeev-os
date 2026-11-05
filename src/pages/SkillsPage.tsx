import { useMemo, useState } from 'react'
import { Code2 } from 'lucide-react'
import { skillCategories } from '@/data/skills'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { StatusBadge } from '@/components/ui/StatusBadge'
import { SkillCategory } from '@/components/skills/SkillCategory'
import { SkillFilter } from '@/components/skills/SkillFilter'
import { filterSkillCategories } from '@/lib/catalog'

export function SkillsPage() {
  const [activeCategory, setActiveCategory] = useState('all')
  const visibleCategories = useMemo(
    () => filterSkillCategories(skillCategories, activeCategory),
    [activeCategory],
  )

  return (
    <div className="page-stack skills-page">
      <SectionHeading
        eyebrow="03 / SKILLS"
        title="A capability matrix, not a scoreboard."
        description="Technologies I have worked with or explored, organized by the systems they help me build."
        action={<StatusBadge tone="info">EXPLORATION INDEX</StatusBadge>}
      />
      <div className="skills-note">
        <Code2 size={16} />
        <p>There are no arbitrary proficiency ratings here. Context, practice, and continued learning matter more than a percentage.</p>
      </div>
      <SkillFilter
        categories={skillCategories}
        activeCategory={activeCategory}
        onChange={setActiveCategory}
      />
      <div className="skill-category-grid">
        {visibleCategories.map((category, index) => (
          <SkillCategory category={category} index={index} key={category.id} />
        ))}
      </div>
    </div>
  )
}
