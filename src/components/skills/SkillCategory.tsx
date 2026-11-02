import { motion } from 'framer-motion'
import type { SkillCategory as SkillCategoryData } from '@/data/skills'
import { Panel } from '@/components/ui/Panel'

type SkillCategoryProps = {
  category: SkillCategoryData
  index: number
}

export function SkillCategory({ category, index }: SkillCategoryProps) {
  const Icon = category.icon

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25, delay: index * 0.04 }}
    >
      <Panel className="skill-category">
        <div className="skill-category__body">
          <div className="skill-category__topline">
            <span className="skill-category__icon"><Icon size={19} /></span>
            <span className="skill-category__count">{category.skills.length.toString().padStart(2, '0')} ITEMS</span>
          </div>
          <h2>{category.label}</h2>
          <p>{category.description}</p>
          <div className="skill-chip-grid">
            {category.skills.map((skill) => (
              <span className="skill-chip" key={skill}>{skill}</span>
            ))}
          </div>
        </div>
      </Panel>
    </motion.div>
  )
}
