import { describe, expect, it } from 'vitest'
import { projects } from '@/data/projects'
import { skillCategories } from '@/data/skills'
import { filterProjects, filterSkillCategories } from './catalog'

describe('catalog filters', () => {
  it('filters projects by category and search term', () => {
    expect(filterProjects(projects, 'cybersecurity', '').map((project) => project.id)).toEqual([
      'phishing-attack-detection',
      'goscan-insightscan',
    ])
    expect(filterProjects(projects, 'all', 'voice agent').map((project) => project.id)).toEqual([
      'ai-procurement-voice-agent',
    ])
  })

  it('returns all skill categories or the selected category', () => {
    expect(filterSkillCategories(skillCategories, 'all')).toHaveLength(6)
    expect(filterSkillCategories(skillCategories, 'ai').map((category) => category.label)).toEqual([
      'AI and LLM Engineering',
    ])
  })
})
